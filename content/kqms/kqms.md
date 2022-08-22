## What is the KQMS?
The KQM Calculation Standard (now known as KQMS) is a set of standards codified in order to establish common ground for calculations regarding team damage, as well as even-ing the disparity between the many different and inconsistent calculation standards during the time of its creation and allow for easy calculation and sheet fact checking. It involves using standardized substat distribution, Energy Recharge specifications, equalized weapons and Constellations, as well as basic assumptions on the nature of the cycle of unit actions (rotations) in order to produce a number comparable between teams. 
<br></br>
It should be explicitly stated that the KQMS only addresses artifact stat distribution, weapon levels, character and talent levels, and a dummy enemy stat block. The KQMS does nothing to advise theorycrafters on what assumptions must be made in regard to rotation length, reaction uptime, buff uptime, AoE modifiers except requiring calculations to state the aforementioned deviations.


## Definitions
- **Fixed substats**: rolls which are preallocated into all substats, including those which are not desirable
- **Distributed substats**: rolls which are distributed optimally within constraints

## Artifacts
- Artifact sets, stack assumptions if not calculated dynamically, mainstats, and energy requirements must be specified.
    - Energy requirements must be calculated with 3 clear orbs from enemies over 90s.
- All artifact pieces must be at maximum level.
- **20 fixed substats** should be distributed as 2 rolls of every substat.
- **20 distributed substats** should be distributed as optimally as can reasonably be achieved with the tools being used within the constraints given.
- Each substat type can have maximum 2 distributed substat rolls per artifact with a main stat that is of a different stat from it.
- 4* artifacts if used have a x0.8 stat modifier, and a penalty of -2 distributed substats per 4* artifact

## Stat Scalars Per Roll
|                   | <div class="s5">5-star</div> | <div class="s4">4-star</div> |
|:------------------|:----------------------------:|:----------------------------:|
| HP%               |                        4.96% |                        3.97% |
| HP                |                       253.94 |                       203.15 |
| ATK%              |                        4.96% |                        3.97% |
| ATK               |                        16.54 |                        13.23 |
| DEF%              |                        6.20% |                        4.96% |
| DEF               |                        19.68 |                        15.74 |
| Elemental Mastery |                        19.82 |                        15.86 |
| CRIT Rate         |                        3.31% |                        2.65% |
| CRIT DMG       |                           5.51% |                        4.41% |
| Energy Recharge   |                        6.62% |                        5.30% |

The KQMS uses an average artifact substat scalar that is an average of the possible sub-stat rolls. There is a 0.8x penalty on 4-star stats.

### Example Distribution

 **Stat Type**         | **<div class="s5">5-star Sub Value</div>** | **Fixed Subs** | **Distributed Subs** | **Stats from Subs** 
|:---------------------|:-------------------------------------:|:--------------:|:--------------------:|:---------:
 HP%               | 4.96%                                 | 2              |                      | 9.92%     
 HP                | 253.94                                | 2              |                      | 507.88    
 ATK%              | 4.96%                                 | 2              | 2                    | 19.84%    
 ATK               | 16.54                                 | 2              |                      | 33.08     
 DEF%              | 6.20%                                 | 2              |                      | 12.40%    
 DEF               | 19.68                                 | 2              |                      | 39.36     
 Elemental Mastery | 19.82                                 | 2              |                      | 39.64     
 CRIT Rate         | 3.31%                                 | 2              | 8                    | 33.1%     
 CRIT DMG          | 5.51%                                 | 2              | 10                   | 66.12%    
 Energy Recharge   | 6.62%                                 | 2              |                      | 13.24%    


 <!--![](/kqms/example_distribution.png) -->

## Weapons
- All weapons must be at LVL90.
- Weapon selection and refinement must be specified.
- Passive uptime assumptions must be specified (ie Lion’s Roar Xingqiu 50% uptime).

## Constellations
- All Constellations must be specified.

## Character and Talent Levels
- All characters must be LVL 90/90 T9(+1) / 9(+3) / 9(+3).

## Rotation and Enemy Assumptions
- Damage must be calculated against LVL100 enemies with 10% universal resistance unless otherwise specified. 
- Any and all rotation assumptions must be specified. This includes but is not limited to:
    - Rotation length
    - Reaction uptime
    - Passive uptime
    - Buff durations
    - AoE Modifiers (if applicable)
    - Primary or single target damage must be listed somewhere if calcs are done with AoE modifiers.
    - Map rotations to gameplay if possible with links to clips.

## Changing the KQMS
As we have improved at theorycrafting and doing calculations, it has become clear that there are several issues with the KQMS. There are team compositions and levels of investment that may not be fully represented by the KQMS and the Standard may need versioning. There must be a systematic approach to addressing each concern, to determine if there is no significant difference or important information to be gleaned from developing a separate set of standards or amending the KQMS.


### Proposals
In order to do this, KQM has tested a proposal system. Each proposal should have:
- **Goal:** The goal of the proposal should be extremely clear. For what purpose are you attempting to amend the KQMS?
- **Effected Teams:** What teams are most impacted by this? You should have calculations available with damage share and changes to DPS from pre and post adjustment.
- **Impact:** A short write-up should be posted alongside your proposal. How does the KQMS change? Are the goal and effect important enough to warrant an amendment? Does it make the KQMS more or less complicated to implement?

