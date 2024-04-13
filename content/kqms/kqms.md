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

### Stat Scalars Per Roll
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

The KQMS uses an average artifact substat scalar that is an average of the possible sub-stat rolls. There is a 0.8x penalty on 4-Star stats.

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

### GCSim:
- The rotation must be running for a minimum of 90 seconds with 1000 iterations
- Kolibri’s [random delay](https://gcsim.app/sh/cDKPNfm6w6Fg) method must be used
- Energy particles must reflect the standard (energy every interval=480,720 amount=1;)
- The target must be the size of a Ruin Guard and positioned in front of the character (radius=2 pos=0,2.4)
    - Characters and targets must not overlap
    - In cases with multiple targets, the other ones will be placed on either side of the character
        - Dual Target: 2 Ruin Guard sized enemies
        - Multi Target: 1 Ruin Guard and 2 Hilichurl sized enemies
- Team rotation must be written in a comment alongside other useful notes