<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    private function templatingAppointments($data, $isNeedClient = false)
    {
        foreach ($data as $appointment) {
            $appointment['doctor_name'] = User::find($appointment['doctor_id'])->name;

            if ($isNeedClient) {
                $client = User::find($appointment['client_id']);

                if ($client !== null) {
                    $appointment['client_name'] = $client->name;
                }
            }

            $appointment['beginning_time_formatted'] = Carbon::parse($appointment['beginning_time'])->format('d.m.Y H:i');
            $appointment['ending_time_formatted'] = Carbon::parse($appointment['ending_time'])->format('d.m.Y H:i');
        }

        return $data;
    }

    public function getAllAppointments()
    {
        $data = Appointment::all();

        return response()->json($this->templatingAppointments($data, true));
    }

    public function getClientAvailableAppointments()
    {
        $data = Appointment::where('client_id', null)->get();

        return response()->json($this->templatingAppointments($data));
    }

    public function getClientScheduledAppointments()
    {
        $data = Appointment::where('client_id', auth()->id())->get();

        return response()->json($this->templatingAppointments($data, true));
    }

    public function getDoctorAppointments()
    {
        $data = Appointment::where('doctor_id', auth()->id())->get();

        return response()->json($this->templatingAppointments($data, true));
    }

    public function storeAppointment(Request $request)
    {
        $data = [
            'doctor_id' => auth()->id(),
            'specialization' => $request['specialization'],
            'beginning_time' => Carbon::parse($request['beginning_time']),
            'ending_time' => Carbon::parse($request['ending_time']),
        ];

        Appointment::create($data);

        return response()->json(['message' => 'appointment was created!']);
    }
}
