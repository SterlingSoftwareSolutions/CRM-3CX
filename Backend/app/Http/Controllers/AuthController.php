<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('crm-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->success($response, 201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string|exists:users,email',
            'password' => 'required|string'
        ]);

        // Check Email
        $user = User::where('email', $fields['email'])->first();

        // Check Password
        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response()->error('Invalid Credentials', 401);
        }

        $token = $user->createToken('crm-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->success($response, 201);
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->success("Logged Out");
    }
}