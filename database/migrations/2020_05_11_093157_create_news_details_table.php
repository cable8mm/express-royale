<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('news_id');
            $table->unsignedTinyInteger('type');
            $table->unsignedInteger('student_id')->nullable();
            $table->unsignedInteger('item_id')->nullable();
            $table->string('value', 64)->nullable();
            $table->timestamps();
            $table->index('news_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news_details');
    }
}
