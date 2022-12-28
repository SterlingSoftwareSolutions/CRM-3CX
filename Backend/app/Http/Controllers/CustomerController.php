<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->success(Customer::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'phone' => 'required|unique:customers'
        ]);

        return response()->success(Customer::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  str  $phone
     * @return \Illuminate\Http\Response
     */
    public function show($phone)
    {
        return response()->success(
            Customer::where('phone', $phone)
            ->with('customer_address')
            ->firstOrFail()
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  App\Models\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  str $phone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $phone)
    {
        $request->validate([
            'phone' => 'unique:customers'
        ]);

        $customer = Customer::where('phone', $phone)->firstOrFail();
        $customer->update($request->all());

        if($request->phone){
            return response()->success(
                Customer::where('phone', $request->phone)
                ->firstOrFail()
            );
        }
        return response()->success($customer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  str $phone
     * @return \Illuminate\Http\Response
     */
    public function destroy($phone)
    {
        $customer = Customer::where('phone', $phone)->firstOrFail();
        $customer->delete();
        return response()->success(null);
    }   

    /**
     * Find resources from storage.
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return response()->success(Customer::where('name', 'like', '%' . $name . '%')->get());
    }
}
