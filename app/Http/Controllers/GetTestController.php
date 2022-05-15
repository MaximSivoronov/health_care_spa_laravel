<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// TODO: Controller for debug purposes, delete controller.
class GetTestController extends Controller
{
    public function __invoke()
    {
        return 12345;
    }
}
