var io = io("http://" + ip + ":" + port + "/");
function loadMatch(data) {
  loadTeams((teams) => {
    $teamList = $(
      "#team_1, #team_2, #team_3, #team_4, #team_5, #team_6, #team_7, #team_8, #team_9, #team_10, #team_11, #team_12, #team_20, #team_21, #team_22, #team_23, #team_24, #team_25, #team_26, #team_27, #team_28"
    );
    $teamList.html(
      "<option value=null>NONE</option><option value='auto' selected>Try to match team automatically</option>"
    );
    teams.sort((a, b) => a.team_name.localeCompare(b.team_name)); // Сортировка по имени команды
    teams.forEach(function (team, id) {
      let $option = $(
        "<option value='" +
          team._id +
          "'>" +
          team.team_name +
          " (" +
          team.short_name +
          ")</option>"
      );
      if (team.logo) {
        $option.attr("data-icon", "/storage/" + team.logo);
      }
      $teamList.append($option);
    }, this);
    if (data) {
      $("#botype").val(data.match);
      $("#team_1_coach").val("").val(data.team_1.coach);
      $("#team_2_coach").val("").val(data.team_2.coach);
      $("#team_1_score").val("0").val(data.team_1.map_score);
      $("#team_2_score").val("0").val(data.team_2.map_score);
      $("#team_1").val("auto").val(data.team_1.team);
      $("#team_2").val("auto").val(data.team_2.team);
      $("#online_map").val("").val(data.map.online_map);
      $("#team_pick_map").val("").val(data.map.team_pick_map);
      $(".map_pick_1").val("").val(data.map.map_pick_1);
      $(".team_1_pick").val("").val(data.map.team_1_pick);
      $(".score_map_1").val("").val(data.map.score_map_1);
      $(".win_map_1").val("").val(data.map.win_map_1);
      $(".playing_1").val("").val(data.map.playing_1);
      $(".map_pick_2").val("").val(data.map.map_pick_2);
      $(".team_2_pick").val("").val(data.map.team_2_pick);
      $(".score_map_2").val("").val(data.map.score_map_2);
      $(".playing_2").val("").val(data.map.playing_2);
      $(".win_map_2").val("").val(data.map.win_map_2);
      $(".map_pick_4").val("").val(data.map.map_pick_4);
      $(".team_4_pick").val("").val(data.map.team_4_pick);
      $(".score_map_4").val("").val(data.map.score_map_4);
      $(".playing_4").val("").val(data.map.playing_4);
      $(".win_map_4").val("").val(data.map.win_map_4);
      $(".map_pick_5").val("").val(data.map.map_pick_5);
      $(".team_5_pick").val("").val(data.map.team_5_pick);
      $(".score_map_5").val("").val(data.map.score_map_5);
      $(".playing_5").val("").val(data.map.playing_5);
      $(".win_map_5").val("").val(data.map.win_map_5);
      $(".decider_map").val("").val(data.map.decider_map);
      $(".score_map_3").val("").val(data.map.score_map_3);
      $(".win_map_3").val("").val(data.map.win_map_3);
      $(".playing_3").val("").val(data.map.playing_3);
      $(".decider_map2").val("").val(data.map.decider_map2);
      $(".score_map_6").val("").val(data.map.score_map_6);
      $(".win_map_6").val("").val(data.map.win_map_6);
      $(".playing_6").val("").val(data.map.playing_6);
      $("#team_3").val("auto").val(data.team_3.team);
      $("#team_4").val("auto").val(data.team_4.team);
      $("#team_5").val("auto").val(data.team_5.team);
      $("#team_6").val("auto").val(data.team_6.team);
      $("#team_7").val("auto").val(data.team_7.team);
      $("#team_8").val("auto").val(data.team_8.team);
      $("#team_9").val("auto").val(data.team_9.team);
      $("#team_10").val("auto").val(data.team_10.team);
      $("#team_11").val("auto").val(data.team_11.team);
      $("#team_12").val("auto").val(data.team_12.team);
      $("#left_events").val("").val(data.map.left_events);
      $("#right_events").val("").val(data.map.right_events);
      $("#pick_map_team1").val("").val(data.map.pick_map_team1);
      $("#pick_map_team2").val("").val(data.map.pick_map_team2);
      $("#pick_map_team4").val("").val(data.map.pick_map_team4);
      $("#pick_map_team5").val("").val(data.map.pick_map_team5);
      $("#decider").val("").val(data.map.decider);
      $("#decider2").val("").val(data.map.decider2);
      $("#logo_champ").val("").val(data.map.logo_champ);
      //- vote -//
      $("#pick_map_team20").val("").val(data.map.pick_map_team20);
      $("#pick_map_team21").val("").val(data.map.pick_map_team21);
      $("#pick_map_team22").val("").val(data.map.pick_map_team22);
      $("#pick_map_team23").val("").val(data.map.pick_map_team23);
      $("#pick_map_team24").val("").val(data.map.pick_map_team24);
      $("#pick_map_team25").val("").val(data.map.pick_map_team25);
      $("#pick_map_team26").val("").val(data.map.pick_map_team26);
      $("#pick_map_team27").val("").val(data.map.pick_map_team27);
      $("#pick_map_team28").val("").val(data.map.pick_map_team28);
      $(".map_pick_20").val("").val(data.map.map_pick_20);
      $(".map_pick_21").val("").val(data.map.map_pick_21);
      $(".map_pick_22").val("").val(data.map.map_pick_22);
      $(".map_pick_23").val("").val(data.map.map_pick_23);
      $(".map_pick_24").val("").val(data.map.map_pick_24);
      $(".map_pick_25").val("").val(data.map.map_pick_25);
      $(".map_pick_26").val("").val(data.map.map_pick_26);
      $(".map_pick_27").val("").val(data.map.map_pick_27);
      $(".map_pick_28").val("").val(data.map.map_pick_28);
      $("#team_20").val("auto").val(data.team_20.team);
      $("#team_21").val("auto").val(data.team_21.team);
      $("#team_22").val("auto").val(data.team_22.team);
      $("#team_23").val("auto").val(data.team_23.team);
      $("#team_24").val("auto").val(data.team_24.team);
      $("#team_25").val("auto").val(data.team_25.team);
      $("#team_26").val("auto").val(data.team_26.team);
      $("#team_27").val("auto").val(data.team_27.team);

      $(".playing_20").val("").val(data.map.playing_20);
      $(".playing_21").val("").val(data.map.playing_21);
      $(".playing_22").val("").val(data.map.playing_22);
      $(".playing_23").val("").val(data.map.playing_23);
      $(".playing_24").val("").val(data.map.playing_24);
      $(".playing_25").val("").val(data.map.playing_25);
      $(".playing_26").val("").val(data.map.playing_26);
      $(".playing_27").val("").val(data.map.playing_27);
    }
    $("select").formSelect();
  });
}
$(document).ready(() => {
  if (io.connected) {
    console.log("Panel.js Connected to io");
  }

  function toggleMapCards(botype) {
    if (botype === "bo1") {
      $("#Map1Card").show();
      $("#Map2Card, #Map3Card, #Map4Card, #Map5Card, #Map6Card").hide();
    } else if (botype === "bo3") {
      $("#Map1Card, #Map2Card, #Map3Card").show();
      $("#Map4Card, #Map5Card, #Map6Card").hide();
    } else if (botype === "bo5") {
      $(
        "#Map1Card, #Map2Card, #Map3Card, #Map4Card, #Map5Card, #Map6Card"
      ).show();
      $("#Map3Card").hide();
    } else if (botype === "none") {
      $(
        "#Map1Card, #Map2Card, #Map3Card, #Map4Card, #Map5Card, #Map6Card"
      ).hide();
    } else if (botype === "bo0") {
      $(
        "#Map1Card, #Map2Card, #Map3Card, #Map4Card, #Map5Card, #Map6Card"
      ).hide();
    }
  }
  // Event listener for botype change
  $("#botype").change(() => {
    const selectedBotype = $("#botype").val();
    toggleMapCards(selectedBotype);
  });

  $(".switch")
    .find("input[type='checkbox'][id$='map1']")
    .on("change", function () {
      var status = $(this).prop("checked");
      let match = {
        match: $("#botype").val(),
        team_1: {
          map_score: $("#team_1_score").val(),
          team: $("#team_1").val(),
          coach: $("#team_1_coach").val(),
        },
        team_2: {
          map_score: $("#team_2_score").val(),
          team: $("#team_2").val(),
          coach: $("#team_2_coach").val(),
        },
        map: {
          coach: $("#team_1_coach").val(),
          coach: $("#team_2_coach").val(),
          online_map: $("#online_map").val(),
          team_pick_map: $("#team_pick_map").val(),
          map_pick_1: $(".map_pick_1").val(),
          team_1_pick: $(".team_1_pick").val(),
          score_map_1: $(".score_map_1").val(),
          win_map_1: $(".win_map_1").val(),
          playing_1: $(".playing_1").val(),
          map_pick_2: $(".map_pick_2").val(),
          team_2_pick: $(".team_2_pick").val(),
          score_map_2: $(".score_map_2").val(),
          playing_2: $(".playing_2").val(),
          win_map_2: $(".win_map_2").val(),
          map_pick_4: $(".map_pick_4").val(),
          team_4_pick: $(".team_4_pick").val(),
          score_map_4: $(".score_map_4").val(),
          playing_4: $(".playing_4").val(),
          win_map_4: $(".win_map_4").val(),
          map_pick_5: $(".map_pick_5").val(),
          team_5_pick: $(".team_5_pick").val(),
          score_map_5: $(".score_map_5").val(),
          playing_5: $(".playing_5").val(),
          win_map_5: $(".win_map_5").val(),
          decider_map: $(".decider_map").val(),
          score_map_3: $(".score_map_3").val(),
          win_map_3: $(".win_map_3").val(),
          playing_3: $(".playing_3").val(),
          decider_map2: $(".decider_map2").val(),
          score_map_6: $(".score_map_6").val(),
          win_map_6: $(".win_map_6").val(),
          playing_6: $(".playing_6").val(),
          left_events: $("#left_events").val(),
          right_events: $("#right_events").val(),
          pick_map_team1: $("#pick_map_team1").val(),
          pick_map_team2: $("#pick_map_team2").val(),
          pick_map_team4: $("#pick_map_team4").val(),
          pick_map_team5: $("#pick_map_team5").val(),
          decider: $("#decider").val(),
          decider2: $("#decider2").val(),
          logo_champ: $("#logo_champ").val(),
          //- vote -//
          map_pick_20: $(".map_pick_20").val(),
          map_pick_21: $(".map_pick_21").val(),
          map_pick_22: $(".map_pick_22").val(),
          map_pick_23: $(".map_pick_23").val(),
          map_pick_24: $(".map_pick_24").val(),
          map_pick_25: $(".map_pick_25").val(),
          map_pick_26: $(".map_pick_26").val(),
          map_pick_27: $(".map_pick_27").val(),
          map_pick_28: $(".map_pick_28").val(),

          playing_20: $(".playing_20").val(),
          playing_21: $(".playing_21").val(),
        },
        team_3: {
          team: $("#team_3").val(),
        },
        team_4: {
          team: $("#team_4").val(),
        },
        team_5: {
          team: $("#team_5").val(),
        },
        team_6: {
          team: $("#team_6").val(),
        },
        team_7: {
          team: $("#team_7").val(),
        },
        team_8: {
          team: $("#team_8").val(),
        },
        team_9: {
          team: $("#team_9").val(),
        },
        team_10: {
          team: $("#team_10").val(),
        },
        team_11: {
          team: $("#team_11").val(),
        },
        team_12: {
          team: $("#team_12").val(),
        },
        team_20: {
          team: $("#team_20").val(),
        },
        team_21: {
          team: $("#team_21").val(),
        },
        team_22: {
          team: $("#team_22").val(),
        },
        team_23: {
          team: $("#team_23").val(),
        },
        team_24: {
          team: $("#team_24").val(),
        },
        team_25: {
          team: $("#team_25").val(),
        },
        team_26: {
          team: $("#team_26").val(),
        },
        team_27: {
          team: $("#team_27").val(),
        },
      };
      io.emit("update_match", match);
      io.emit("toggleMap1", status);
      console.log("Panel.js Connected to io");
    });
  /*
  // Initial toggle based on default botype value
  toggleMapCards($("#botype").val());
  $("#iSIDButton").click(() => {
    let iSID = $("#iSIDinput").val().trim(); // iSID(ignoreSteamID)
    io.emit("hidePlayers", { iSID: iSID }); // Emit the data to the server
    let chip = $(
      `<div class="chip"><span class="chip-text">Hiding: ${iSID}</span></div>`
    );
    $(".chip-container").append(chip);
    document.getElementById("iSIDinput").value = ""; // Clear the form
  });
*/
  $("#set").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#set2").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        map_pick_20: $(".map_pick_20").val(),
        playing_20: $(".playing_20").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
    };
    io.emit("update_match", match);
  });
  $("#swap").click(() => {
    let match = {
      match: $("#botype").val(),
      team_2: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_1: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap2").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_5").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_3").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_9").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_7").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap3").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_5").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_3").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_9").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_7").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap4").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_5: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_3: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_9: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_7: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      map: {
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
      },
    };
    io.emit("update_match", match);
  });
  $("#swap5").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_1").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap6").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_2").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap7").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_1").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap8").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_2").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap9").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_1").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap10").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_2").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap11").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_1").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap12").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_2").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap20").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_1").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap21").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_2").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap22").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_1").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap23").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_2").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap24").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_1").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap25").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_2").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap26").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_1").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap27").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_2").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap28").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_1").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap29").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_2").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap30").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_1").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#swap31").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_2").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win1").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_1").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win2").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_2").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win3").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_1").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win4").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_2").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win5").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_1").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win6").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_2").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_10").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win7").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_1").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#win8").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_3").val(),
      },
      team_4: {
        team: $("#team_4").val(),
      },
      team_5: {
        team: $("#team_5").val(),
      },
      team_6: {
        team: $("#team_6").val(),
      },
      team_7: {
        team: $("#team_7").val(),
      },
      team_8: {
        team: $("#team_8").val(),
      },
      team_9: {
        team: $("#team_9").val(),
      },
      team_10: {
        team: $("#team_2").val(),
      },
      team_11: {
        team: $("#team_11").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_20").val(),
      },
      team_21: {
        team: $("#team_21").val(),
      },
      team_22: {
        team: $("#team_22").val(),
      },
      team_23: {
        team: $("#team_23").val(),
      },
      team_24: {
        team: $("#team_24").val(),
      },
      team_25: {
        team: $("#team_25").val(),
      },
      team_26: {
        team: $("#team_26").val(),
      },
      team_27: {
        team: $("#team_27").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  $("#ref").click(() => {
    io.emit("refresh", true);
  });
  $("#res").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      team_3: {
        team: $("#team_12").val(),
      },
      team_4: {
        team: $("#team_12").val(),
      },
      team_5: {
        team: $("#team_12").val(),
      },
      team_6: {
        team: $("#team_12").val(),
      },
      team_7: {
        team: $("#team_12").val(),
      },
      team_8: {
        team: $("#team_12").val(),
      },
      team_9: {
        team: $("#team_12").val(),
      },
      team_10: {
        team: $("#team_12").val(),
      },
      team_11: {
        team: $("#team_112").val(),
      },
      team_12: {
        team: $("#team_12").val(),
      },
      team_20: {
        team: $("#team_12").val(),
      },
      team_21: {
        team: $("#team_12").val(),
      },
      team_22: {
        team: $("#team_12").val(),
      },
      team_23: {
        team: $("#team_12").val(),
      },
      team_24: {
        team: $("#team_12").val(),
      },
      team_25: {
        team: $("#team_12").val(),
      },
      team_26: {
        team: $("#team_12").val(),
      },
      team_27: {
        team: $("#team_12").val(),
      },
      map: {
        coach: $("#team_1_coach").val(),
        coach: $("#team_2_coach").val(),
        online_map: $("#online_map").val(),
        team_pick_map: $("#team_pick_map").val(),
        map_pick_1: $(".map_pick_1").val(),
        team_1_pick: $(".team_1_pick").val(),
        score_map_1: $(".score_map_1").val(),
        win_map_1: $(".win_map_1").val(),
        playing_1: $(".playing_1").val(),
        map_pick_2: $(".map_pick_2").val(),
        team_2_pick: $(".team_2_pick").val(),
        score_map_2: $(".score_map_2").val(),
        playing_2: $(".playing_2").val(),
        win_map_2: $(".win_map_2").val(),
        map_pick_4: $(".map_pick_4").val(),
        team_4_pick: $(".team_4_pick").val(),
        score_map_4: $(".score_map_4").val(),
        playing_4: $(".playing_4").val(),
        win_map_4: $(".win_map_4").val(),
        map_pick_5: $(".map_pick_5").val(),
        team_5_pick: $(".team_5_pick").val(),
        score_map_5: $(".score_map_5").val(),
        playing_5: $(".playing_5").val(),
        win_map_5: $(".win_map_5").val(),
        decider_map: $(".decider_map").val(),
        score_map_3: $(".score_map_3").val(),
        win_map_3: $(".win_map_3").val(),
        playing_3: $(".playing_3").val(),
        decider_map2: $(".decider_map2").val(),
        score_map_6: $(".score_map_6").val(),
        win_map_6: $(".win_map_6").val(),
        playing_6: $(".playing_6").val(),
        left_events: $("#left_events").val(),
        right_events: $("#right_events").val(),
        pick_map_team1: $("#pick_map_team1").val(),
        pick_map_team2: $("#pick_map_team2").val(),
        pick_map_team4: $("#pick_map_team4").val(),
        pick_map_team5: $("#pick_map_team5").val(),
        decider: $("#decider").val(),
        decider2: $("#decider2").val(),
        logo_champ: $("#logo_champ").val(),
        //- vote -//
        map_pick_20: $(".map_pick_20").val(),
        map_pick_21: $(".map_pick_21").val(),
        map_pick_22: $(".map_pick_22").val(),
        map_pick_23: $(".map_pick_23").val(),
        map_pick_24: $(".map_pick_24").val(),
        map_pick_25: $(".map_pick_25").val(),
        map_pick_26: $(".map_pick_26").val(),
        map_pick_27: $(".map_pick_27").val(),
        map_pick_28: $(".map_pick_28").val(),

        playing_20: $(".playing_20").val(),
        playing_21: $(".playing_21").val(),
        playing_22: $(".playing_22").val(),
        playing_23: $(".playing_23").val(),
        playing_24: $(".playing_24").val(),
        playing_25: $(".playing_25").val(),
        playing_26: $(".playing_26").val(),
        playing_27: $(".playing_27").val(),
      },
    };
    io.emit("update_match", match);
    console.log("Panel.js Connected to io");
  });
  /*$("#res").click(() => {
    io.emit("reset", true);
  });*/
  io.on("match", loadMatch);
  loadMatch();
  io.emit("ready", true);
});
