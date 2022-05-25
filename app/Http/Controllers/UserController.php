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

    public function editUser(User $user)
    {
        return response()->json($user);
    }

    public function updateUser(User $user, Request $request)
    {
        $data = [
            'name' => $request['name'],
            'email' => $request['email'],
            'role' => $request['role'],
        ];

        $user->update($data);

        return response()->json('user was updated!');
    }
}
