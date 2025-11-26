<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = Message::latest()->get();
        return Inertia::render('Admin/Messages/Index', [
            'messages' => $messages
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        if (!$message->read_at) {
            $message->update(['read_at' => now()]);
        }

        return Inertia::render('Admin/Messages/Show', [
            'message' => $message
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        $message->delete();

        return redirect()->route('admin.messages.index')->with('success', 'Message deleted successfully.');
    }
}
