<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static MaxClasses()
 * @method static static ClassPerMan()
 * @method static static MinSessionPeriod()
 * @method static static MaxSessionJoin()
 * @method static static MinSessionRespawn()
 * @method static static DefaultAttack()
 * @method static static AttackMaxIncrease()
 * @method static static Health()
 * @method static static HealthMaxIncrease()
 * @method static static LevelPerExperience()
 * @method static static LevelExperienceIncrease()
 * @method static static SkillExperience()
 * @method static static MaxStamina()
 * @method static static FirstAidStamina()
 * @method static static DetoxStamina()
 */
final class GameSetting extends Enum
{
    // 반 숫자
    const MaxClasses = 2;

    // 반당 최대 수
    const ClassPerMan = 21; 
    
    // 프로그램 최저 개최일수 (최후의 한명이 남더라도, 이 시간 이하라면 게임은 계속 됩니다.)
    const MinSessionPeriod = 86400;

    // 프로그램 접수 마감일수 (가입 제한)
    const MaxSessionJoin = 172800;

    // 사망 후 가입 가능 시간
    const MinSessionRespawn = 60;

    // 기본 공격
    const DefaultAttack = 8;

    // 공격 최대 상승폭
    const AttackMaxIncrease = 5;

    // 기본 방어
    const DefaultDefence = 8;

    // 방어 최대 상승폭
    const DefenceMaxIncrease = 5;

    // 기본 체력
    const Health = 90;

    // 체력 최대 상승폭
    const HealthMaxIncrease = 20;

    // 레벨 경험치
    const LevelExperience = 16;

    // 레벌 경험치 상승값
    const LevelExperienceIncrease = 4;

    // 숙련도 경험치
    const SkillExperience = 20;

    // 스테미너 최대치
    const MaxStamina = 500;

    // 응급처치 커맨드의 소비 스테미너
    const FirstAidStamina = 30;

    // 독 조사 커맨드의 소비 스테미너
    const DetoxStamina = 10;
}
