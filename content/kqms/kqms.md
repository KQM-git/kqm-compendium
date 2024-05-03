## What is the KQMS?
The KQM Calculation Standard (now known as KQMS) is a set of standards codified in order to establish common ground for calculations regarding team damage and comparisons, as well as even-ing the disparity between the many different and inconsistent calculation standards during the time of its creation and allow for easy calculation and fact checking. It involves using standardized substat distribution, Energy Recharge specifications, equalized weapons and Constellations, as well as basic assumptions on the nature of the cycle of unit actions (rotations) in order to produce a number comparable between teams.
<br></br>
It should be explicitly stated that the KQMS only addresses artifact stat distribution, weapon levels, character and talent levels, and a dummy enemy stat block. The KQMS does nothing to advise theorycrafters on what assumptions must be made in regard to reaction uptime, buff uptime, AoE modifiers except requiring calculations to state the aforementioned deviations.


## Artifacts
### General Information:
- Artifacts sets, stacks, mainstats and energy requirements must be specified
- All artifacts pieces must be at maximum level
- A total of 40 substats will be distributed accordingly, assuming all artifacts are of 5-star rarity, otherwise the appropriate penalty will be applied:
    - 20 substats are fixed, 2 rolls must be distributed for every substat
    - 20 substats must be distributed as optimally as possible within the used tool given the constraints and an error margin of 1 roll is accepted
- Each substat type can have maximum 2 distributed substat rolls per artifact with a main stat that is of a different stat from it
- 4-star artifacts if used have a x0.8 stat modifier, and a penalty of -2 distributed substats per 4-star artifact

### Stat Scalars Per Roll:
The KQMS uses an average artifact substat scalar that is an average of the possible sub-stat rolls. There is a 0.8x penalty on 4-Star stats.
|                   | <div class="s5">5-Star</div> | <div class="s4">4-Star</div> |
|:------------------|:----------------------------:|:----------------------------:|
| HP%               |                        4.96% |                        3.97% |
| HP                |                       253.94 |                       203.15 |
| ATK%              |                        4.96% |                        3.97% |
| ATK               |                        16.54 |                        13.23 |
| DEF%              |                        6.20% |                        4.96% |
| DEF               |                        19.68 |                        15.74 |
| Elemental Mastery |                        19.82 |                        15.86 |
| CRIT Rate         |                        3.31% |                        2.65% |
| CRIT DMG          |                        6.62% |                        5.30% |
| Energy Recharge   |                        5.51% |                        4.41% |

#### Example:
 **Stat Type**         | **<div class="s5">5-Star Sub Value</div>** | **Fixed Subs** | **Distributed Subs** | **Stats from Subs** 
|:---------------------|:-------------------------------------:|:--------------:|:--------------------:|:---------:
 HP%               | 4.96%                                 | 2              |                      | 9.92%     
 HP                | 253.94                                | 2              |                      | 507.88    
 ATK%              | 4.96%                                 | 2              | 2                    | 19.84%    
 ATK               | 16.54                                 | 2              |                      | 33.08     
 DEF%              | 6.20%                                 | 2              |                      | 12.40%    
 DEF               | 19.68                                 | 2              |                      | 39.36     
 Elemental Mastery | 19.82                                 | 2              |                      | 39.64     
 CRIT Rate         | 3.31%                                 | 2              | 8                    | 33.10%     
 CRIT DMG          | 6.62%                                 | 2              | 10                   | 79.44%    
 Energy Recharge   | 5.51%                                 | 2              |                      | 11.02%    

### Artifact Rarity Mix:
To account for the fact that substat values are not strictly supposed to be 0.8x because you can have one 5-star artifact is to take an average based on the number of 5- and 4-star artifacts you have and adjust the artifact stat scalar.

#### Example:
If you have one 5-star artifact and four 4-star artifacts, the sub multiplier would be:
<div class='boxed'>
(1 * 1 + 0.8 * 4) / 5 = 0.84x
</div>
This value (0.84) will be multiplied with the roll value of a 5-star artifact to obtain an accurate substat value.


## Weapons
- All weapons must be at level 90
- Weapon selection and refinement must be specified
- Passive uptime assumptions must be specified (ie Lion’s Roar Xingqiu 50% uptime)


## Constellations
- All Constellations must be specified


## Character and Talent Levels
- All characters must be level 90
- All talents must be level 9(+3) / 9(+3) / 9(+3)
- All characters start with 100% HP and Elemental Burst charged, unless specified otherwise


## Rotation and Enemy Assumptions
- Damage must be calculated against level 100 enemies with 10% universal resistance unless otherwise specified


## Tool Specific Observations
### Sheets / Genshin Optimizer:
- When using the Energy Recharge Calculator, the energy requirements must be calculated with 3 clear orbs from enemies over 90s on Safe Particle RNG
- Any and all rotation assumptions must be specified. This includes but is not limited to:
    - Rotation length
    - Reaction uptime
    - Passive uptime
    - Buff durations
    - AoE Modifiers (if applicable)
    - Primary or single target damage must be listed somewhere if calculations are done with AoE modifiers
    - Map rotations to gameplay if possible with links to clips

### gcsim:
- The rotation must be running for a minimum of 90 seconds with 1000 iterations
- Kolibri’s random delay method must be used. Choose a delay from below which you consider is the best one for the unit you are calculating
  <details>
  <summary>Standard Delay</summary>

  ```bash
  # use truncated normal distribution for random delay
  fn rand_delay(mean, stddev, min, max) {
    # randnorm has mean: 0 and stddev: 1, so this makes it have mean and stddev from input
    let del = randnorm() * stddev + mean;
    
    # truncate random value according to min and max
    if del < min {
      del = min;
    } else if del > max {
      del = max;
    }
    
    # execute delay
    delay(del);
  }

  let prev_char_id = -1;
  let prev_action_id = -1;

  let _execute_action = execute_action;
  fn execute_action(char_id number, action_id number, p map) {
    # print(prev_char_id, " ", prev_action_id, " ", char_id, " ", action_id);

    # this next if block handles implict swap or otherwise any pre swap delay specified in this function will not work
    if prev_char_id != char_id && action_id != .action.swap {
      execute_action(char_id, .action.swap, []);
    }

    if action_id == .action.swap {
      # add delay before swap
        # ~3% chance at 6
        # ~7% chance at 20
      rand_delay(14, 4, 6, 20);
    } else if prev_action_id != .action.swap  {
      # add delay before every non-swap
        # ~30% chance at 0
        # 5% chance at 8
      rand_delay(2, 4, 0, 8);
    } else if prev_action_id == .action.swap {
      # add delay after swap to account for repositioning
        # ~16% chance at 6
        # ~16% chance at 18
      rand_delay(12, 6, 6, 18);
    }

    # this here tracks the previous character id so that it can be used above
    prev_char_id = char_id;
    prev_action_id = action_id;
    return _execute_action(char_id, action_id, p);
  }
  ```
  </details>

  <details>
  <summary>No Attack and Swap Q Delay</summary>

  ```bash
  # use truncated normal distribution for random delay
  fn rand_delay(mean, stddev, min, max) {
    # randnorm has mean: 0 and stddev: 1, so this makes it have mean and stddev from input
    let del = randnorm() * stddev + mean;
    
    # truncate random value according to min and max
    if del < min {
      del = min;
    } else if del > max {
      del = max;
    }
    
    # execute delay
    delay(del);
  }

  let prev_char_id = -1;
  let prev_action_id = -1;

  let _execute_action = execute_action;
  fn execute_action(char_id number, action_id number, p map) {
    #print(prev_char_id, " ", prev_action_id, " ", char_id, " ", action_id);

    # this next if block handles implict swap or otherwise any pre swap delay specified in this function will not work
    if prev_char_id != char_id && action_id != .action.swap {
      execute_action(char_id, .action.swap, []);
    }

    if action_id == .action.swap {
      # add delay before swap
        # ~3% chance at 6
        # ~7% chance at 20
      rand_delay(14, 4, 6, 20);
    } else if prev_action_id == .action.attack && action_id == .action.attack {
      // no delay
    } else if prev_action_id == .action.attack && action_id == .action.charge {
      // no delay
    } else if prev_action_id == .action.swap && action_id == .action.burst {
      // no delay
    } else if prev_action_id != .action.swap  {
      # add delay before every non-swap
        # ~30% chance at 0
        # 5% chance at 8
      rand_delay(2, 4, 0, 8);
    } else if prev_action_id == .action.swap {
      # add delay after swap to account for repositioning
        # ~16% chance at 6
        # ~16% chance at 18
      rand_delay(12, 6, 6, 18);
    }

    # this here tracks the previous character id so that it can be used above
    prev_char_id = char_id;
    prev_action_id = action_id;
    return _execute_action(char_id, action_id, p);
  }
  ```
  </details>

- Energy particles must reflect the standard (energy every interval=480,720 amount=1;)
- The target must be the size of a Ruin Guard and positioned in front of the character (radius=2 pos=0,2.4)
    - Characters and targets must not overlap
    - In cases with multiple targets, the other ones will be placed on either side of the character
        - Dual Target: 2 Ruin Guard sized enemies
        - Multi Target: 1 Ruin Guard and 2 Hilichurl sized enemies (radius=1)
- Team rotation must be written in a comment alongside other useful notes
- Example sim: [gcsim.app/sh/WHRdGBMbmGnH](https://gcsim.app/sh/WHRdGBMbmGnH)
  <details>
  <summary>Code</summary>

  ```bash
  # use truncated normal distribution for random delay
  fn rand_delay(mean, stddev, min, max) {
    # randnorm has mean: 0 and stddev: 1, so this makes it have mean and stddev from input
    let del = randnorm() * stddev + mean;
    
    # truncate random value according to min and max
    if del < min {
      del = min;
    } else if del > max {
      del = max;
    }
    
    # execute delay
    delay(del);
  }

  let prev_char_id = -1;
  let prev_action_id = -1;

  let _execute_action = execute_action;
  fn execute_action(char_id number, action_id number, p map) {
    # print(prev_char_id, " ", prev_action_id, " ", char_id, " ", action_id);

    # this next if block handles implict swap or otherwise any pre swap delay specified in this function will not work
    if prev_char_id != char_id && action_id != .action.swap {
      execute_action(char_id, .action.swap, []);
    }

    if action_id == .action.swap {
      # add delay before swap
        # ~3% chance at 6
        # ~7% chance at 20
      rand_delay(14, 4, 6, 20);
    } else if prev_action_id != .action.swap  {
      # add delay before every non-swap
        # ~30% chance at 0
        # 5% chance at 8
      rand_delay(2, 4, 0, 8);
    } else if prev_action_id == .action.swap {
      # add delay after swap to account for repositioning
        # ~16% chance at 6
        # ~16% chance at 18
      rand_delay(12, 6, 6, 18);
    }

    # this here tracks the previous character id so that it can be used above
    prev_char_id = char_id;
    prev_action_id = action_id;
    return _execute_action(char_id, action_id, p);
  }

  options iteration=1000;

  # Build assumptions
  hutao char lvl=90/90 cons=0 talent=9,9,9;
  hutao add weapon="balladofthefjords" refine=1 lvl=90/90;
  hutao add set="shimenawasreminiscence" count=4;
  hutao add stats hp=4780 atk=311 em=187 cr=0.311 pyro%=0.466 ; # main stats
  hutao add stats def%=0.124 def=39.36 hp=507.88 hp%=0.0992 atk=33.08 atk%=0.0992 er=0.1102 em=79.28 cr=0.331 cd=0.7944;

  yelan char lvl=90/90 cons=0 talent=9,9,9;
  yelan add weapon="favoniuswarbow" lvl=90/90 refine=3;	
  yelan add set="emblemofseveredfate" count=4;										
  yelan add stats hp=4780 atk=311 hp%=0.466 hydro%=0.466 cr=0.311; # main stats
  yelan add stats def%=0.124 def=39.36 hp=507.88 hp%=0.1984 atk=33.08 atk%=0.0992 er=0.1102 em=39.64 cr=0.331 cd=0.7944;

  xingqiu char lvl=90/90 cons=6 talent=9,9,9;
  xingqiu add weapon="favsword" refine=3 lvl=90/90;
  xingqiu add set="emblemofseveredfate" count=4;
  xingqiu add stats hp=4780 atk=311 atk%=0.466 hydro%=0.466 cd=0.622 ; # main stats
  xingqiu add stats def%=0.124 def=39.36 hp=507.88 hp%=0.0992 atk=33.08 atk%=0.2976 er=0.4408 em=39.64 cr=0.3972 cd=0.1324;

  kazuha char lvl=90/90 cons=0 talent=9,9,9;
  kazuha add weapon="xiphosmoonlight" refine=1 lvl=90/90;
  kazuha add set="viridescentvenerer" count=4;
  kazuha add stats hp=4780 atk=311 em=187 em=187 em=187 ; # main stats
  kazuha add stats def%=0.124 def=39.36 hp=507.88 hp%=0.0992 atk=33.08 atk%=0.3968 er=0.6612 em=118.92 cr=0.0662 cd=0.1324;

  # Target and Energy assumptions
  target lvl=100 resist=0.1 radius=2 pos=0,2.4 hp=999999999; # standard ST target
  energy every interval=480,720 amount=1; # standard Energy drops

  # Rotation assumptions
  active xingqiu;

  for let i=0; i<4; i=i+1 { 
    xingqiu burst, attack, skill;
    # weave NAs to trigger XQ burst
    yelan burst, attack, skill, attack;
    # weave NAs to trigger Yelan and XQ bursts
    kazuha burst, skill, high_plunge, attack;
    hutao skill,
      # 9[N1CJ] combo
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump,
      attack:1, charge, jump; 
    kazuha skill, high_plunge;
  }

  # Xingqiu Q N1 E > Yelan Q N1 E N1 > Kazuha Q tEP N1 > Hutao E 9[N1CJ] > Kazuha tEP
  ```
  </details>
