<?php 

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    public function authorize() : bool
    {
        return true;
    }

    public function rules() : array
    {
        return [
            'email' => 'required|email',
            'password'=> 'required',
        ];
    }

    public function messages() : array
    {
        return [
            'email.required' => 'Bạn chưa nhập vào Email.',
            'email.email' => 'Email chưa đúng định dạng. Ví dụ: abc@gmail.com',
            'password.required' => 'Bạn chưa nhập vào mật khẩu.'

        ];
    }
}