<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Customer::factory(50)->create();
        \App\Models\CustomerAddress::factory(55)->create();
        \App\Models\CallType::factory(10)->create();
        \App\Models\Inquiry::factory(100)->create();
        \App\Models\Feedback::factory(90)->create();
        \App\Models\UserPhone::factory(15)->create();
    }
}
