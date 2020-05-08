<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameItemCombinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_item_combines', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('base_id');
            $table->unsignedInteger('combine_id');
            $table->unsignedInteger('result_id');
            $table->timestamps();
            $table->unique(['base_id', 'combine_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_item_combines');
    }
}
