<template>
  <div class="demo-icon">
    <i class="glyph__add"></i>
    <i class="glyph__close"></i>
    <i class="glyph__add--primary"></i>
    <i class="glyph__checkbox--success"></i>
    <i class="glyph__arrow--right"></i>
    <i class="glyph__arrow--left"></i>
    <i class="glyph__close--gray"></i>

    <ic-icon name="Job-address"></ic-icon>
    <ic-icon name="Job-people"></ic-icon>
    <ic-icon name="Job-reward"></ic-icon>
    <ic-icon name="resume-certificate"></ic-icon>
    <ic-icon name="resume-skills"></ic-icon>
    <ic-icon name="edit"></ic-icon>
    <ic-icon name="form-relationship"></ic-icon>
  </div>
</template>

<style lang="stylus">
  .demo-icon
    .ic-icon
      display inline-block
      animation move 1s cubic-bezier(.62, -0.91, .45, 1.97)
      animation-fill-mode backwards
    .icon-Job-address
      animation-delay 0s
    .icon-Job-people
      animation-delay 1s
    .icon-Job-reward
      animation-delay 2s
    .icon-resume-certificate
      animation-delay 3s
    .icon-resume-skills
      animation-delay 4s
    .icon-edit
      animation-delay 5s
  @keyframes move
    0%
      opacity 0
      transform translateY(100%)
    100%
      opacity 1
      transform translateY(0%)
</style>
