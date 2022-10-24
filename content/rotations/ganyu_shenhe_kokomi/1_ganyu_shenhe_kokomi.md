---
title: Ganyu Shenhe Kokomi Freeze
tab_title: CC - Kokomi - AoE
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
  - ~80% Freeze and Healing Uptime wherein both can contribute to better damage and gameplay in practice
  - Made up of units that are highly specialized for Freeze and aren't highly contested for as a result
  - Gears are very accessible for F2Ps
cons:
  - Performs worse in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios
  - Has a high accessibility wall being completely made up of limited 5-Star characters
  - Rotation has more swaps compared to the Mona Variation which can be hard to learn and getting used to
  - Swaps need to be done as fast as possible to keep the rotation times low
  - Kokomi's ER requirements are relatively high even with 2 Favonius users in the team

sheet_url: https://docs.google.com/spreadsheets/d/1H-gadOC_35Y_PvdxRHkxhR6YzWCTFc6HgcfqHRQKXM8/edit#gid=1035782785
gcsim_url: https://gcsim.app/viewer/share/perm_hW7rHiwzkhypak_WRds2I
rotation:
  duration: 20.5s
  video_url: https://www.youtube.com/watch?v=ry_u84WQESc
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
    cd: 216.8
    er: 111.02
    dps: 28322
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
    cd: 109.58
    er: 152.64
    dps: 4955
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
    em: 680
    cr: 41.41
    cd: 109.58
    er: 204.32
    dps: 7733
  - name: Sangonomiya Kokomi
    star: 5
    constellation: 0
    weapon:
      name: Thrilling Tales of Dragon Slayers
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 33894
    atk: 1392
    def: 780
    em: 40
    cr: -88.38
    cd: 63.24
    er: 206.90
    dps: 2087
---
 
# **Notes**

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, uses a mix of craftable and non-limited gacha weapons, 21*4/18 Ganyu Icicles, 15 Venti Burst Absorption Procs, and 18 Swirls. 21 Icicle assumption was derived by weighing the average Icicles for split enemies and sucked by Venti's Burst/Frozen (14.74 Icicles = 2 Split Targets, 24.74 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((6.25/15) * 14.74 + (8.75/15) * 24.74 = 20.57 ≈ 21 Icicles.) Icicle count became 18 Icicles for the 5th rotation as the omitted 3 Icicles overlap with the 6th rotation. Gcsim numbers don't penalize periods where there's no grouping nor Freeze as it's not implemented at the time of writing whereas this sheet does, but allows for Favonius refinements and proc rate variance to affect the DPS, and are some of the factors that have to be kept in mind. ER requirements were determined through Gcsim, while the remaining fluid substats were optimized with the Solver.
<br></br>

This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this comp ends up performing worse or even not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios. Compared to the Mona variation instead of Kokomi, this comp on paper sacrifices some DPS ceiling for a massive improvement in the healing department and Freeze uptime that can result in better grouping and damage in practice. While that may seem that it would result in easier gameplay, the rotation has more swaps which can be hard to learn and getting used to, and the effective rotation length will scale marginally worse the higher your ping. It is also completely made up of limited 5-Stars characters and can be an expensive team to build. Kokomi's ER requirements are quite high even with 2 Favonius users in the team, and will need more resin investment for artifacts on average compared to other low damage profile supports in other teams. 2 Favonius users is mandatory when Kokomi Bursting every rotation and ~80% Freeze uptime is desired, but not Bursting with her is at all is also viable, and can be a DPS increase on paper even as it lets Venti use a more offensive weapon such as The Stringless (only with the rotation tailored for it which can also be found as an entry here) while being cheaper to build. Swaps need to be done as fast as possible to keep the rotation times low.
<br></br>

# **Rotation Notes**
Kokomi E
Ganyu CA
Shenhe QtE
Ganyu EQ
Kokomi Q(N2) - N2 should be skipped if it prolongs your rotation
Ganyu CA
Shenhe tE
Ganyu E CA
Venti E
<br></br>

**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. 
 