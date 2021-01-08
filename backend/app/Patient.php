<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //
    public function user(){
        return $this->belongsTo('App\User','patient','id');

    }

    public function rdvs(){
        return $this->hasMany('App\Rdv','patient','id');
    }
}
