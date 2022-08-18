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
| HP%               |                        4.96% |                        4.96% |
| HP                |                       253.94 |                       253.94 |
| ATK%              |                        4.96% |                        4.96% |
| ATK               |                        16.54 |                        16.54 |
| DEF%              |                        6.20% |                        6.20% |
| DEF               |                        19.68 |                        19.68 |
| Elemental Mastery |                        19.82 |                        19.82 |
| CRIT Rate         |                        6.62% |                        6.62% |
| CRIT Damage       |                        5.51% |                        5.51% |
| Energy Recharge   |                        3.31% |                        3.31% |

The KQMS uses an average artifact substat scalar that is an average of the possible sub-stat rolls. There is a 0.8x penalty on 4-star stats.

### Example Distribution
![](/kqms/example_distribution.png)

## Weapons
- All weapons must be at LVL90.
- Weapon selection and refinement must be specified.
- Passive uptime assumptions must be specified (ie Lion’s Roar Xingqiu 50% uptime).

## Constellations
- All constellations must be specified.

## Character and Talent Levels
- All characters must be LVL90/90 T9(+1)/9(+3)/9(+3).

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