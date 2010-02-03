test("registers an event", function(){
	 var happened = false;
	 $("body").register("custom", function() { happened = true; });
	 ok(!happened, "event was not triggered yet");
	 $.broadcast("custom");
	 ok(happened, "event was registered");
});

test("namespaces an event", function(){
	 var happened = false;
	 var native_event = false;
	 $("body").register("click", function(){ happened = true});
	 $("body").click(function() { native_event = true });
	 ok(!native_event, "not triggered yet");
	 ok(!happened, "not triggered yet");
	 $("body").click();
	 ok(!happened, "not triggered by actual click");
	 ok(native_event, "triggered by click");
	 $.broadcast("click");
	 ok(happened, "we still have our event");
});