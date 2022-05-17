<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAuthenticatedUser()
    {
        return response()->json(auth()->user()->role);
    }
}
