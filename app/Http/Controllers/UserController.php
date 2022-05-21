<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAuthenticatedUser()
    {
        return response()->json(auth()->user());
    }

    public function getAllUsers()
    {
        return response()->json(User::all());
    }
}
