<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        User::factory()->create([
            'name' => 'Nam Hoàng Văn',
            'email' => 'chandanv1010@gmail.com',
            'password' => Hash::make('password'),
            'address' => 'Sol Forest 1 Khu Đô Thị Ecopark',
            'phone' => '0982365824'
        ]);

        // $this->call([
        //     UserSeeder::class
        // ]);

    }
}
