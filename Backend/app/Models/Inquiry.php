<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'customer_id',
        'call_type_id',
        'brand',
        'brand_availability',
        'action',
        'product_category',
        'status_remark'
    ];

    public function call_type()
    {
        return $this->hasOne(CallType::class);
    }

    public function feedback()
    {
        return $this->hasOne(Feedback::class);
    }
}
