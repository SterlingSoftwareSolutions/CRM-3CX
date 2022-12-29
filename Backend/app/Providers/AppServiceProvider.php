<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpFoundation\Response as Codes;
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
        Response::macro('success', function ($data, $code = Codes::HTTP_OK){
            return response()->json([
                'success' => true,
                'data' => $data
            ], $code);
        });

        Response::macro('error', function ($error, $status_code = Codes::HTTP_NOT_FOUND){
            return response()->json([
                'success' => false,
                'error' => $error
            ], $status_code);
        });
    }
}
