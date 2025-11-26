<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('slug')->unique();
            $table->string('category')->nullable();
            $table->boolean('featured')->default(false);
            $table->string('thumbnail')->nullable();
            $table->json('images')->nullable();
            $table->text('description')->nullable();
            $table->longText('long_description')->nullable();
            $table->json('technologies')->nullable();
            $table->json('features')->nullable();
            $table->json('achievements')->nullable();
            $table->json('links')->nullable();
            $table->json('timeline')->nullable();
            $table->string('role')->nullable();
            $table->string('team_size')->nullable();
            $table->string('status')->default('completed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
