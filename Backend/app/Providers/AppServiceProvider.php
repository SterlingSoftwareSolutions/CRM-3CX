<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($data){
            return response()->json([
                'success' => true,
                'data' => $data
            ], 200);
        });

        Response::macro('error', function ($error, $status_code){
            return response()->json([
                'success' => false,
                'error' => $error
            ], $status_code);
        });
    }
}
