<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');
        $authenticatedUser = User::authenticate($credentials['username'], $credentials['password']);

        if (!$authenticatedUser) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }

        $authenticatedUser['token'] = JWTAuth::fromUser($authenticatedUser);
        return response()->json($authenticatedUser);
    }

    public function store(Request $request)
    {
        Log::debug('storing');

        $user = new User($request->all());

        if (!$user->save()) {
            abort(500, 'Could not save user.');
        }

        $user['token'] = JWTAuth::fromUser($user);
        return $user;
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function getByToken()
    {
        return JWTAuth::parseToken()->authenticate();
    }
}