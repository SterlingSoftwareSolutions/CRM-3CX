<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CallTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->text(15),
            'comment' => $this->faker->realText(150)
        ];
    }
}
