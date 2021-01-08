<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrestatairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestataires', function (Blueprint $table) {
            $table->id();
            $table->string('nomcomplet');
            $table->string('description');
            $table->string('telephone');
            $table->string('gouvernourat');
            $table->string('type');
            $table->string('image')->nullable();
            $table->string('lang')->nullable();
            $table->string('lat')->nullable();
            $table->integer('prestataire');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prestataires');
    }
}
