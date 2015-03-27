<?php namespace Todo\Http\Controllers;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Todo\Http\Requests;
use Todo\User;

class UserController extends Controller
{
    private $req;
    private $user;

    function __construct(Request $request, User $user, ResponseFactory $responseFactory)
    {
        $this->req = $request;
        $this->user = $user;
        $this->res = $responseFactory;
    }

    /**
     * Log a user in.
     *
     * @return Response
     */
    public function login()
    {
        $user = $this->user->authenticate(
            $this->req->input('username'), $this->req->input('password'));
        if (!$user) {
            return $this->res->json([
                'code' => null,
                'message' => 'Login failed',
                'description' => 'Wrong username/password.'

            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return $this->res->json($user, Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $user = new User($this->req->all());
        if (!$user->save()) {
            abort(500, 'Could not save user.');
        }
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

}
