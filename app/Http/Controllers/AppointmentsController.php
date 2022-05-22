<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    public function getAllAppointments()
    {
        $data = Appointment::all();

        foreach ($data as $appointment) {
            $appointment['doctor_name'] = User::find($appointment['doctor_id'])->name;
            $appointment['beginning_time_formatted'] = Carbon::parse($appointment['beginning_time'])->format('D m H:i');
            $appointment['ending_time_formatted'] = Carbon::parse($appointment['ending_time'])->format('D m H:i');
        }

        return response()->json($data);
    }

    public function getClientAvailableAppointments()
    {
        $data = Appointment::where('client_id', null)->get();

        foreach ($data as $appointment) {
            $appointment['doctor_name'] = User::find($appointment['doctor_id'])->name;
            $appointment['beginning_time_formatted'] = Carbon::parse($appointment['beginning_time'])->format('D m H:i');
            $appointment['ending_time_formatted'] = Carbon::parse($appointment['ending_time'])->format('D m H:i');
        }

        return response()->json($data);
    }

    public function getClientScheduledAppointments()
    {
        $data = Appointment::where('client_id', auth()->id())->get();

        foreach ($data as $appointment) {
            $appointment['doctor_name'] = User::find($appointment['doctor_id'])->name;
            $appointment['beginning_time_formatted'] = Carbon::parse($appointment['beginning_time'])->format('D m H:i');
            $appointment['ending_time_formatted'] = Carbon::parse($appointment['ending_time'])->format('D m H:i');
        }

        return response()->json($data);
    }

    public function storeAppointment(Request $request)
    {
        $data = [
            'doctor_id' => $request['doctor_id'],
            'specialization' => $request['specialization'],
            'beginning_time' => Carbon::parse($request['beginning_time']),
            'ending_time' => Carbon::parse($request['ending_time']),
        ];

        Appointment::create($data);

        return response()->json(['message' => 'appointment was created!']);
    }
}
