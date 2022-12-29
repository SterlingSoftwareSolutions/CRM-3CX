<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class InquiryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $availability = ['Available', 'Unavavailable', 'Unknown'];
        return [
            'user_id' => random_int(1,10),
            'customer_id' => random_int(1,50),
            'call_type_id' => random_int(1,10),
            'brand' => $this->faker->company(),
            'brand_availability' => $availability[random_int(0,1)],
            'product_category' => $this->faker->realText(10),
            'action' => $this->faker->realText(10),
            'status_remark' => $this->faker->realText(50),
            'open' => $this->faker->boolean(30)
        ];
    }
}
