<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Todo;

class TodoController extends Controller
{
    public function index()
    {
        return Todo::all();
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $todo = new Todo($input);
        if (!$todo->save()) {
            abort(500, "Saving failed.");
        }
        return $todo;
    }

    public function show($id)
    {
        return Todo::find($id);
    }

    public function update($id, Request $request)
    {
        $todo = Todo::find($id);
        $todo->body = $request->input('body');
        if (!$todo->save()) {
            abort(500, "Saving failed");
        }
        return $todo;
    }

    public function destroy($id)
    {
        return Todo::destroy($id);
    }
}
