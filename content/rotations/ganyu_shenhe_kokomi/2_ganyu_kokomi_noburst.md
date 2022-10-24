---
title: Ganyu Shenhe Kokomi Freeze (No Kokomi Burst)
tab_title: CC - No Kokomi Burst - AoE
authors:
  - CC
healing: 3
shielding: 1
difficulty: 3
target: 4
tags:
  - Unverified
  - Ganyu
  - Shenhe
  - Venti
  - Kokomi
  - Quickswap
  - Multi-Target
  - Sustained
  - Freeze
  - F2P Gears
pros:
  - Very good damage against 2 or more enemies that are freezable and can be crowd controlled by Venti's Burst
  - Made up of units that are highly specialized for Freeze and aren't highly contested for as a result
  - Gears are very accessible for F2Ps
  - Building Kokomi is extremely cheap
cons:
  - Performs worse in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios
  - Has a high accessibility wall being completely made up of limited 5-Star characters
  - Rotation has more swaps compared to the Mona Variation which can be hard to learn and getting used to
  - Swaps need to be done as fast as possible to keep the rotation times low
  - Lower healing uptime than the rotation where Kokomi uses her Burst

sheet_url: https://docs.google.com/spreadsheets/d/1XZ8uBChtbumC6do-wLwPSp0klGLblThsxlhA26rt1FA/edit#gid=1035782785
gcsim_url: https://gcsim.app/viewer/share/perm_xxg1Y08pFfsNrifmFqc1h
rotation:
  duration: 21.75s
  video_url: https://youtu.be/4SRXjjlGm68
characters:
  - name: Ganyu
    star: 5
    constellation: 0
    weapon:
      name: Prototype Crescent
      refinement: 5
    artifacts:
      - Blizzard Strayer
    hp: 16089
    atk: 2101
    def: 750
    em: 40
    cr: 44.72
    cd: 216.80
    er: 111.02
    dps: 31500
  - name: Shenhe
    star: 5
    constellation: 0
    weapon:
      name: Favonius Lance
      refinement: 3
    artifacts:
      - Noblesse Oblige
    hp: 19599
    atk: 2299
    def: 973
    em: 40
    cr: 52.65
    cd: 96.34
    er: 163.66
    dps: 3367
  - name: Sangonomiya Kokomi
    star: 5
    constellation: 0
    weapon:
      name: Thrilling Tales of Dragon Slayers
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 33894
    atk: 1724
    def: 780
    em: 40
    cr: -88.38
    cd: 83.10
    er: 116.53
    dps: 987
  - name: Venti
    star: 5
    constellation: 0
    weapon:
      name: Favonius Warbow
      refinement: 3
    artifacts:
      - Viridescent Venerer
    hp: 16899
    atk: 1133
    def: 793
    em: 845
    cr: 38.10
    cd: 102.96
    er: 154.00
    dps: 8655
---
 
# **Notes**  

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, uses a mix of craftable and non-limited gacha weapons, 20*4/19 Ganyu Icicles, 15 Venti Burst Absorption Procs, and 18 Swirls. 20 Icicle assumption was derived by weighing the average Icicles for split enemies and sucked by Venti's Burst/Frozen (14.74 Icicles = 2 Split Targets, 24.74 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((7/15) * 14.74 + (8/15) * 24.74 = 20.07 ≈ 20 Icicles.) Icicle count became 19 Icicles for the 5th rotation as the omitted 1 Icicle overlap with the 6th rotation. Gcsim numbers don't penalize periods where there's no grouping nor Freeze as it's not implemented at the time of writing whereas this sheet does, but allows for Favonius refinements and proc rate variance to affect the DPS, and are some of the factors that have to be kept in mind. ER Requirements were determined through gcsim, while the remaining fluid substats were optimized with the Solver.  
<br></br>

This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this comp ends up performing worse or even not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios. This rotation does not make use of Kokomi's Burst, which comes with some pros such as 1) Kokomi not having any ER Requirement which makes building her so cheap and 2) unshackling Venti from Favonius Warbow and letting him run more offensive bows such as The Stringless and do more personal damage. While these are positives for damage on paper and investment that is being demanded, this rotation has half the healing uptime a rotation with Kokomi Burst has and while healing is generally not needed as much for Freeze comps compared to others, some people may prefer the comfort in gameplay refreshing the jellyfish provides.
<br></br>

# **Rotation Notes**  

**General Bow Rotation:**  
Shenhe Q tE  
Kokomi E  
Ganyu E Q  
Venti E Q  
Ganyu 2CA  
Shenhe tE  
Venti E  
Ganyu E 3CA  
<br></br>

**Prototype Crescent Rotation:**  
Ganyu CA (aim for the weakspot)  
Shenhe Q tE  
Kokomi E  
Ganyu E Q  
Venti E Q  
Ganyu 2CA  
Shenhe tE  
Venti E  
Ganyu E 2CA  
<br></br>

**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. z