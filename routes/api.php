<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/users', [\App\Http\Controllers\UserController::class, 'getAllUsers']);
    Route::get('/user', [\App\Http\Controllers\UserController::class, 'getAuthenticatedUser']);
    Route::get('/appointment', [\App\Http\Controllers\AppointmentsController::class, 'getAllAppointments']);
    Route::get('/appointments/client/available', [\App\Http\Controllers\AppointmentsController::class, 'getClientAvailableAppointments']);
    Route::get('/appointments/client/scheduled', [\App\Http\Controllers\AppointmentsController::class, 'getClientScheduledAppointments']);
    Route::get('/appointments/doctor/scheduled', [\App\Http\Controllers\AppointmentsController::class, 'getDoctorScheduledAppointments']);
    Route::post('/appointment', [\App\Http\Controllers\AppointmentsController::class, 'storeAppointment']);
});
