<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    public function getAllAppointments() {
        return response()->json(Appointment::all());
    }

    public function storeAppointment(Request $request) {
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
