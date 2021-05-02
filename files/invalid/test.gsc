#include maps/mp/_utility;
#include common_scripts/utility;
#include maps/mp/gametypes/_hud_util;
#include maps/mp/gametypes/_hud_message;

init()
{
    level thread onplayerconnect();	
}

onplayerconnect()
{
    for(;;)
    {
        level waittill("connected", player);
		    player thread onplayerspawned();
    }
}

onplayerspawned()
{
    self endon("disconnect");
    level endon("game_ended");
    for(;;)
    {
        self waittill("spawned_player");
        self iprintln("working!");
    }
}
