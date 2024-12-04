
var teams = {
    left: {},
    right: {}
}
var start_money = {};
var radarToggle = null

function updateLeague() {
	if (_displayRadar && radarToggle == null) {
		toggleRadar(true)
	}
}
function toggleRadar(toggle) {
	if (toggle == true) {
		radarToggle = true
		$('#radar_border').css('opacity', 1)
	} else {
		radarToggle = false
		$('#radar_border').css('opacity', 0)
	}
}

function fillObserved(player) {
    let statistics = player.getStats();
    let weapons = player.weapons;
    let right = false;

    if (player.observer_slot >= 1 && player.observer_slot <= 5) {
        right = true;
    }
    let flag = player.country_code || (right
        ? (teams.left.flag || "")
        : (teams.right.flag || ""));
    if(flag){
        $("#flag").css("background-image", "url(/files/img/flags/" + flag + ".png)").css("background-size","55px").css("margin-top", "-55px").removeClass("no-flag");
    } else {
        $("#flag").css("background-image", "").addClass("no-flag");
    }
    if(player.team == "CT"){
        if(teams.left.side == "ct"){
            $("#team_logo_bottom").attr("src", "/teams/"+teams.left.logo);
            $("#team_logo_bottom").removeClass("empty");
            $("#second_row").removeClass("ct-name-color t-name-color");
            $("#second_row").addClass("ct-name-color");
        }
        else{
            $("#team_logo_bottom").attr("src", "/teams/"+teams.right.logo);
            $("#team_logo_bottom").removeClass("empty");
            $("#second_row").removeClass("ct-name-color t-name-color");
            $("#second_row").addClass("ct-name-color");
        }
    }
    else {
        $("#team_logo_bottom").addClass("empty");
    }
    if(player.team == "T"){
        if(teams.left.side == "t"){
            $("#team_logo_bottom").attr("src", "/teams/"+teams.left.logo);
            $("#team_logo_bottom").removeClass("empty");
            $("#second_row").removeClass("ct-name-color t-name-color");
            $("#second_row").addClass("t-name-color");
        }
        else{
            $("#team_logo_bottom").attr("src", "/teams/"+teams.right.logo);
            $("#team_logo_bottom").removeClass("empty");
            $("#second_row").removeClass("ct-name-color t-name-color");
            $("#second_row").addClass("t-name-color");
        }
    }
    else {
        $("#team_logo_bottom").addClass("empty");
    }
    $("#kills_hud_count").html(statistics.kills);
    $("#assist_hud_count").html(statistics.assists);
    $("#death_hud_count").html(statistics.deaths);
    $("#kills_count").html(statistics.kills + " K /");
    $("#assist_count").html(statistics.assists + " A /");
    $("#death_count").html(statistics.deaths + " D");

    //add kill icons
    if(statistics.round_kills > 0){
        $("#kills").html(statistics.round_kills);
        $("#kills").append($("<img />").attr("src", "/files/img/kill.png").css("width", "20px").css("margin-left", "4px").addClass("kill"));
    }
    else{
        $("#kills").html("");
    }

    $("#player-container")
        .removeClass("t ct")
        .addClass(player.team.toLowerCase());

    $("#current_nick").html(player.name);
    $("#nick_also").html(player.real_name + " ");

    $("#nades").html("");

    $('#right_img').css("float", "left")
    $('#left_img').css("float", "right")

    for (let key in weapons) {
        let weapon = weapons[key];
        if (weapon.type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {
                $("#nades").append($("<img />").attr("src", "/files/img/grenades/" + weapon.name + ".png"));
            }
        }
        if (weapon.state == "active" || weapon.state == "reloading") {
            if (weapon.type == "Grenade" || weapon.type == "C4" || weapon.type == "Knife" || statistics.health == 0) {

                $(".clip").html("");
                $(".reserve").html("");
            } else {
                $(".clip").html(weapon.ammo_clip + "/");
                $(".reserve").html(weapon.ammo_reserve);
            }
        }
    }
    $("#armor-text").html(statistics.armor);
    $("#health-text").html(statistics.health);
    $("#armor-text")
        .removeClass("armor helmet")
        .addClass(statistics.helmet
            ? "helmet"
            : "armor");
    loadAvatar(player.steamid, function(){
        $("#avatar_container").html($("<img />").attr("src", "/av/"+player.steamid));
    });
}
function fillPlayers(teams){
    if(teams.left.players){
        for(var i = 0; i < 5; i++){
            if(i >=teams.left.players.length){
                $("#left").find("#player"+(i+1)).css("opacity", "0");
            } else{
                fillPlayer(teams.left.players[i],i, "left", teams.left.players.length);
                $("#left").find("#player"+(i+1)).css("opacity","1");
            }
        }
    }
    if(teams.right.players){
        for(var i = 0; i < 5; i++){
            if(i >=teams.right.players.length){
                $("#right").find("#player"+(i+1)).css("opacity","0");
            } else{
                fillPlayer(teams.right.players[i],i, "right", teams.right.players.length);
                $("#right").find("#player"+(i+1)).css("opacity","1");
            }
        }
    }
}
function fillPlayer(player, nr, side, max){
    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    let team = player.team.toLowerCase();

    let health_color = statistics.health <= 20 ? "#ff0000" : team == "ct" ? "#00a0ff":"#ffa000";
    let $player = $("#"+side).find("#player"+(nr+1));

    let $bottom = $player.find(".bottom_bar");
    let $top = $player.find(".bar1");
    let $number = $player.find("#number");

    let gradient = "linear-gradient(to " + side +", rgba(0,0,0,0) " + (100-statistics.health) + "%, " + health_color + " " + (100-statistics.health) + "%)";

    $top.find("#bar_username").text(player.name.split(" ").join(""));
    $top.find("#bar_username").removeClass("dead").addClass(statistics.health == 0 ? "dead" : "");

    $top.find("#hp_p").text(statistics.health);
    
    $top.find(".hp_bar").css("background", gradient);

    $bottom.find(".kills").text(statistics.kills);
    $bottom.find(".assists").text(statistics.assists);
    $bottom.find(".deaths").text(statistics.deaths);

    $bottom.find(".hp_el").html(statistics.helmet ? $("<img />").attr("src", "/files/img/elements/helmet.png") : statistics.armor > 0 ? $("<img />").attr("src", "/files/img/elements/armor.png") : "");
    $bottom.find(".bomb_defuse").html(statistics.defusekit ? $("<img />").attr("src", "/files/img/elements/defuse.png").addClass("invert_brightness") : "");0

    $bottom.find(".moneys").text("$"+statistics.money);
    $bottom.find(".moneys").removeClass("low").addClass(statistics.money < 1000? "low":"");
    
    $top.find("#weapon_icon").html("");
    $bottom.find("#weapon_icon").html("");

    $number.removeClass("dead").addClass(statistics.health == 0 ? "dead" : "");
    $number.removeClass("ct-hud-color t-hud-color ct-dead-color t-dead-color").addClass(player.team.toLowerCase() + "-hud-color").addClass(statistics.health == 0 ? player.team.toLowerCase() + "-dead-color" : "");

    if(statistics.round_kills > 0){
        let img_css = {
            "text-shadow":"0 0 10px black",
            "margin-top":"-3.5px",
            "float": side
        };
        $bottom.find("#weapon_icon").prepend($("<img />").attr("src", "/files/img/elements/kill.png").addClass("kill").css("float", side)).prepend($("<div></div>").text(statistics.round_kills).css(img_css));
    }

    for(let key in weapons){
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if(type != "C4" && type != "Knife"){
            view += weapon.state == "active" ? "checked" : "";
            
            if(type == "Grenade"){
                for(let x = 0; x < weapon.ammo_reserve; x++){
                    $bottom.find("#weapon_icon").append($("<img />").attr("src", "/files/img/grenades/weapon_" + name + ".png").addClass("invert").addClass(view));
                }
            } else if(type) {
                view += side == "right" ? " img-hor" : "";
                if (type == "Pistol") {
                    $bottom.find("#weapon_icon").prepend($("<img />").attr("src", "/files/img/weapons/" + name + ".png").addClass("invert").addClass(view));
                } else {
                    $top.find("#weapon_icon").prepend($("<img />").attr("src", "/files/img/weapons/" + name + ".png").addClass("invert").addClass(view));
                }
            }
        }
        if(type == "C4"){
            $bottom.find(".bomb_defuse").html($("<img />").attr("src", "/files/img/elements/bomb.png").addClass("invert_brightness"));
        }
    }
    
    if (!start_money[steamid]) {
        start_money[steamid] = statistics.money;
    } 
    $("#stats_player"+slot).find("#stat_money").html("-"+(start_money[steamid]-statistics.money)+"$");
}
var isDefusing = false;

var bomb_time,
    bomb_timer,
    bomb_timer_css,
    bomb_container_css;
bomb_time = 0;
function bomb(time) {
    if (Math.pow((time - bomb_time), 2) > 1) {
        clearInterval(bomb_timer);
        bomb_time = parseFloat(time);
        if (bomb_time > 0) {
            bomb_timer = setInterval(function () {
                bomb_container_css = {
                    display: "block"
                }
                bomb_timer_css = {
                    display: "block",
                    width: bomb_time * 90 / 40 + "%"
                }
                if(teams.right.side == "t"){
                    $("#right_container").css(bomb_container_css);
                    $("#right_bar").css(bomb_timer_css);
                    $("#right_bar").css("float", "right")
                }
                else{
                    $("#left_container").css(bomb_container_css);
                    $("#left_bar").css(bomb_timer_css);
                    $("#left_bar").css("float", "left")
                }
                bomb_time = bomb_time - 0.01;
            }, 10);
        } else {
            clearInterval(bomb_timer);
        }
    }
}
function resetBomb() {
    clearInterval(bomb_timer);
    if(teams.right.side == "t"){
        $("#right_container").css("display", "none");
        $("#right_bar").css("display", "none");
    }
    else{
        $("#left_container").css("display", "none");
        $("#left_bar").css("display", "none");
    }
}

//SOME other weird vars
var menu = false;
var freezetime = false;
let last_round = 0;
var ot_count = 0;
var run_once = 0;

function updatePage(data) {
    var observed = data.getObserved();
    var phase = data.phase();
    var team_one = data.getTeamOne();
    var team_two = data.getTeamTwo();
    
    var matchup = data.getMatchType();
    var match = data.getMatch();
    if(matchup && matchup.toLowerCase() != "none"){
        var block = $("<div class='block'></div>");
        var left_bl = $("<div></div>");
        var right_bl = $("<div></div>");
        for(var x = 0; x < (matchup == "bo5" ? 3 : 2); x ++){
            block.clone().appendTo($(left_bl)).addClass(match.team_1.map_score > x ? "win" : "");
            block.clone().appendTo(right_bl).addClass(match.team_2.map_score > x ? "win" : "");
        }
        $("#match_one_info").show();
        $("#match_two_info").show();
        $("#match_one_info").html(left_bl);
        $("#match_two_info").html(right_bl);
        
        $("#match_info").show();
        $("#match_info").text("Best Of " + matchup.substr(2));
    } else {
        $("#match_one_info").hide();
        $("#match_two_info").hide();
        $("#match_info").hide();
    }
    if (observed.steamid == 1 || !observed) {
        $("#player-container").css("opacity", "0");
    } else if (observed) {
        menu = (data.info.player.activity == "menu");
        $("#player-container").css("opacity", !menu ? "1" : "0");
    }
    let left,
        right;
    var players = data.getPlayers();
    var round = data.round();
    var map = data.map();

    var round_now = map.round + (round.phase == "over" || round.phase == "intermission"
        ? 0
        : 1);
    if ((round.phase == "freezetime" && !freezetime) || round_now != last_round) {
        start_money = {};
    }
    var longd = 10;
    var shortd = 5
    var team_ct = data.getCT();
    var team_t = data.getT();
    var test_player2 = data.getPlayer(1);
    var tscore = [];

    $("body").css("display", !map || menu
        ? "none"
        : "block");
    if (test_player2) {
        left = test_player2
            .team
            .toLowerCase() == "ct"
            ? team_ct
            : team_t;
        right = test_player2
            .team
            .toLowerCase() != "ct"
            ? team_ct
            : team_t;

        teams.left.side = left.side || null;
        teams.right.side = right.side || null;

        teams.left.name = team_one.short_name || left.name;
        teams.right.name = team_two.short_name || right.name;

        if(right.side == "ct"){
            $("#right_background").addClass("defuse_background");
            $("#right_bar").addClass("defuse_bar");
            $('#right_img').addClass("defuse_img");
            $("#left_background").addClass("bomb_background");
            $("#left_bar").addClass("bomb_bar");
            $('#left_img').addClass("bomb_img");
        }
        else{
            $("#left_background").removeClass();
            $("#left_bar").removeClass();
            $('#left_img').removeClass();
            $("#right_background").removeClass();
            $("#right_bar").removeClass();
            $('#right_img').removeClass();
            $("#left_background").addClass("defuse_background");
            $("#left_bar").addClass("defuse_bar");
            $('#left_img').addClass("defuse_img");
            $("#right_background").addClass("bomb_background");
            $("#right_bar").addClass("bomb_bar");
            $('#right_img').addClass("bomb_img");
        }

        if(teams.left.score !== undefined && teams.right.score !== undefined){
            if(left.score > teams.left.score){
                $("#winning_team").text(teams.left.name).removeClass("t-color ct-color").addClass(teams.left.side.toLowerCase() + "-color");
                $("#who_won").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0);
            } else if(right.score > teams.right.score){
                $("#winning_team").text(teams.right.name).removeClass("t-color ct-color").addClass(teams.right.side.toLowerCase() + "-color");
                $("#who_won").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0);
            }
        }

        //Loss Bonus calculation
        var loss_bonusCT
        var loss_bonusT
        if(map.round == 0){
            loss_bonusCT = 1900;
            loss_bonusT = 1900;
        }
        else{
            if(team_ct.consecutive_round_losses == 0){
                loss_bonusCT = 1400;
            }
            if(team_ct.consecutive_round_losses == 1){
                loss_bonusCT = 1900;
            }
            if(team_ct.consecutive_round_losses == 2){
                loss_bonusCT = 2400;
            }
            if(team_ct.consecutive_round_losses == 3){
                loss_bonusCT = 2900;
            }
            if(team_ct.consecutive_round_losses >= 4){
                loss_bonusCT = 3400;
            }
            if(team_t.consecutive_round_losses == 0){
                loss_bonusT = 1400;
            }
            if(team_t.consecutive_round_losses == 1){
                loss_bonusT = 1900;
            }
            if(team_t.consecutive_round_losses == 2){
                loss_bonusT = 2400;
            }
            if(team_t.consecutive_round_losses == 3){
                loss_bonusT = 2900;
            }
            if(team_t.consecutive_round_losses >= 4){
                loss_bonusT = 3400;
            }
        }
        
        teams.left.score = left.score;
        teams.right.score = right.score;

        teams.left.flag = team_one.country_code || null;
        teams.right.flag = team_two.country_code || null;

        teams.left.logo = team_one.logo || null;
        teams.right.logo = team_two.logo || null;

        teams.left.map_score = team_one.map_score || 0;
        teams.right.map_score = team_two.map_score || 0;


        teams.left.players = left.players || null;
        teams.right.players = right.players || null;

        $("#match_one_info")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase())
            .removeClass("ct-name-color t-name-color")
            .addClass(test_player2.team.toLowerCase() + "-name-color");
        $("#match_two_info")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase() != "ct"
                ? "ct"
                : "t")
            .removeClass("ct-name-color t-name-color")
            .addClass(test_player2.team.toLowerCase() != "ct"
                ? "ct-name-color"
                : "t-name-color");

        $("#team_1")
            .removeClass("ct-color t-color")
            .addClass(test_player2.team.toLowerCase() + "-color");

        $("#team_1")
            .find("#team_name").removeClass("ct-name-color t-name-color").addClass(test_player2.team.toLowerCase() + "-name-color");

        $("#team_2")
            .removeClass("ct-color t-color")
            .addClass(test_player2.team.toLowerCase() != "t"
                ? "t-color"
                : "ct-color");
        
        $("#team_2")
            .find("#team_name").removeClass("ct-name-color t-name-color")
            .addClass(test_player2.team.toLowerCase() != "t"
                ? "t-name-color"
                : "ct-name-color");

        $("#left")
            .find("#team_money_1").removeClass('low').addClass(left.team_money < 1000 ? "low":"")
            .text("$" + left.team_money);
        $("#left")
            .find("#eq_money_1")
            .text("$" + left.equip_value);

        $("#left_value")
            .find("#eq_money_1")
            .text("$" + left.equip_value);
       
        if(teams.left.side == "ct"){
            $("#left_loss_value")
                .find("#ls_money_1")
                .text("$" + loss_bonusCT);
        }
        else{
            $("#left_loss_value")
                .find("#ls_money_1")
                .text("$" + loss_bonusT);
        }

        $("#right")
            .find("#team_money_2").removeClass('low').addClass(right.team_money < 1000 ? "low":"")
            .text("$" + right.team_money);
        $("#right")
            .find("#eq_money_2")
            .text("$" + right.equip_value);
        $("#right_value")
            .find("#eq_money_2")
            .text("$" + right.equip_value);

        if(teams.right.side == "ct"){
            $("#right_loss_value")
                .find("#ls_money_2")
                .text("$" + loss_bonusCT);
        }
        else{
            $("#right_loss_value")
                .find("#ls_money_2")
                .text("$" + loss_bonusT);
        }
    }

    var ot_length = 6;
    var team_1_timeout = 4;
    var team_2_timeout = 4;

    //esea fix
    if((team_ct.score + team_t.score) > 14 && round_now <14){
        round_now = round_now + 15
    }

    //OT Count
    //Played more than 30 rounds
    //Add one to the OT counter
    //Add only once per OT
    console.log(run_once)
    if ((round_now - 30) > 0){
        if((round_now - 37) % ot_length == 0 && run_once == 0 && round.phase == "freezetime"){
            ot_count++
            run_once = 1;
        }
    
        if(run_once == 1 && round.phase == 'live'){
            run_once = 0;
        }
        $("#round_counter").html("Round " + (round_now - 30 - ((ot_count-1) * ot_length)) + "/6");
        // if ((round_now - 37) % ot_length == 0 && run_once == 0){
        //     run_once = 1
        //     ot_count++
        // }
        // if (round.phase == "over"){
        //     run_once = 0
        // }
        if(ot_count > 0){
            $("#round_counter").css("font-size", "10px")
            $("#round_counter").html("OT: " + ot_count + " Round " + (round_now - 30 - ((ot_count-1) * ot_length)) + "/6")
        }
    } else{
        $("#round_counter").html("Round " + round_now + "/30");
    }
    //TEAMS
    $("#team_2 #team_name").html(teams.right.name);
    $("#team_2 #team_score").html(teams.right.score);
    $("#team_1 #team_name").html(teams.left.name);
    $("#team_1 #team_score").html(teams.left.score);
    if (teams.left.logo || teams.left.flag) {
        if (teams.left.flag) {
            $("#team_1 #team_logo #team_flag").css("background-image", "url('/files/img/flags/" + teams.left.flag + ".png')");
        }
        if (teams.left.logo) {
            $("#team_1_logo").attr("src", '/storage/'+ teams.left.logo);
            $("#team_1 #team_logo").removeClass("empty");
        }
    } else {
        $("#team_1 #team_logo #team_flag").css("background-image", "");
        $("#team_1 #team_logo").addClass("empty");
    }
    if (teams.right.logo || teams.right.flag) {
        if (teams.right.flag) {
            $("#team_2 #team_logo #team_flag").css("background-image", "url('/files/img/flags/" + teams.right.flag + ".png')");
        }
        if (teams.right.logo) {
            $("#team_2_logo").attr("src", '/storage/' + teams.right.logo);
            $("#team_2 #team_logo").removeClass("empty");
        }
    } else {
        $("#team_2 #team_logo").addClass("empty");
        $("#team_2 #team_logo #team_flag").css("background-image", "");
    }

    //OBSERVED PLAYER
    if (observed && observed.steamid != 1 && observed.getStats()) {
        fillObserved(observed);
    }
    
    //EVERY OTHER PLAYER
    if (players) {
        
        var offset = 0;
        for (var sl in players) {
            let player = players[sl];
            if (avatars[player.steamid] != true && disp_avatars) 
                loadAvatar(player.steamid);
            
            if(player.observer_slot <= 5 && offset == 0 && player.team.toLowerCase() != teams.left.side)
                offset = 6 - sl;
        }
        fillPlayers(teams)
    }

    var defuseTime;
    var normalise = function(val, max, min){
        return (val - min) / (max - min)
    }

    var left_dead = 0;
    var right_dead = 0;

    for(var i = 0; i < 5; i++){
        if(left.players[i].state.health == 0){
            left_dead++
        }
    }
    for(var i = 0; i < 5; i++){
        if(right.players[i].state.health == 0){
            right_dead++
        }
    }

    var left_alive = left.players.length - left_dead;
    var right_alive = right.players.length - right_dead;

    $("#player_counter")
    .find("#player_counter_numbers")
    .find('#left_number')
    .text(left_alive)

    $("#player_counter")
    .find("#player_counter_numbers")
    .find('#right_number')
    .text(right_alive)

    if (left_alive == 1 || right_alive == 1){
        $("#player_counter")
        .find("#player_counter_text")
        .text("Clutch Situation")
    }
    else{
        $("#player_counter")
        .find("#player_counter_text")
        .text("Players Alive")
    }
    $("#left_number")
        .removeClass("ct-counter-color t-counter-color")
        .addClass(left.side + "-counter-color");
    $("#right_number")
    .removeClass("ct-counter-color t-counter-color")
    .addClass(right.side + "-counter-color");
    //PHASESc
    if (phase) {
        $("#time_counter").css("color", (phase.phase == "live" || phase.phase == "over" || phase.phase == "warmup" || (phase.phase == "freezetime" && phase.phase_ends_in > 10))
            ? "white"
            : "red");
        if(teams.right.side == "ct"){
            $("#right_container").css("display", phase.phase == "defuse"
            ? "block"
            : "none");
        }
        else{
            $("#left_container").css("display", phase.phase == "defuse"
            ? "block"
            : "none");
        }

        if (phase.phase == "bomb" || phase.phase == "defuse") {
            if (phase.phase == "bomb") {
                bomb(parseFloat(phase.phase_ends_in));
            }
            if (phase.phase == "defuse") {
                if(!isDefusing){
                    //check for kit
                    if(parseFloat(phase.phase_ends_in) <= 5){
                        //have kit
                        haveKit = true;
                        isDefusing = true;
                    }
                    else if(parseFloat(phase.phase_ends_in) > 5){
                        //don't have kit
                        haveKit = false;
                        isDefusing = true;
                    }
                }
                if (haveKit){
                    defuseTime = normalise(parseFloat(phase.phase_ends_in), shortd, 0);
                }
                else if (!haveKit){
                    defuseTime = normalise(parseFloat(phase.phase_ends_in), longd, 0);
                }
                if(teams.right.side == "ct"){
                    $("#right_bar").css("width", 350 * defuseTime + "px");
                }
                else{
                    $("#left_bar").css("width", 350 * defuseTime + "px");
                }
            }
        } else {
            resetBomb();
            isDefusing = false;
        }
        let team_1_timeout_cache = team_1_timeout
        let team_2_timeout_cache = team_2_timeout

        if (phase.phase == "freezetime" || phase.phase.substring(0,7) == "timeout") {
            
            if(team_1_timeout < team_1_timeout_cache){
                //replace win bar with "Timeout taken by team 1"
                team_1_timeout--;
            }
            if(team_2_timeout < team_2_timeout_cache){
                //replace win bar with "Timeout taken by team 2"
                team_2_timeout--;
            }
            if (phase.phase_ends_in > 3) {
                if ($("#economy").css("opacity") == 0) {
                    $(".money").fadeTo(1000, 1);
                    $("#economy").fadeTo(1000,1);
                    $("#stats-container").fadeTo(1000,1);
                    $(".stat_t").fadeTo(1000, 1);
                    $("#loss_bonus").fadeTo(1000,1);

                }
            } else {
                if ($("#economy").css("opacity") == 1) {
                    $(".money").fadeTo(1000, 0);
                    $(".stat_t").fadeTo(1000, 0);
                    $("#stats-container").fadeTo(1000,0);
                    $("#economy").fadeTo(1000,0);
                    $("#loss_bonus").fadeTo(1000,0);
                    if (observed && observed.steamid != 1) 
                        $("#player-container").fadeTo(1000, 1);

                    }
                }

        } else {
            if ($("#economy").css("opacity") == 1) {
                $(".money").fadeTo(1000, 0);
                $(".stat_t").fadeTo(1000, 0);
                $("#stats-container").fadeTo(1000,0);
                $("#economy").fadeTo(1000,0);
                $("#loss_bonus").fadeTo(1000,0);
                if (observed && observed.steamid != 1) 
                    $("#player-container").fadeTo(1000, 1);
            }
        }
        if (phase.phase_ends_in) {
            var countdown = Math.abs(Math.ceil(phase.phase_ends_in));
            var count_minute = Math.floor(countdown / 60);
            var count_seconds = countdown - (count_minute * 60);
            if (count_seconds < 10) {
                count_seconds = "0" + count_seconds;
            }
            if(phase.phase == "bomb" || phase.phase == "defuse"){
                $("#time_counter").text("").addClass("bomb_timer");
            } else {
                $("#time_counter").text(count_minute + ":" + count_seconds).removeClass("bomb_timer");
            }
        }
    }
    freezetime = round.phase == "freezetime";
    last_round = round_now;
}