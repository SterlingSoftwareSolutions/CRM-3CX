<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'inquiry_id' => $this->faker->unique()->numberBetween(1, 90),
            'feedback' => $this->faker->realText(50)
        ];
    }
}
