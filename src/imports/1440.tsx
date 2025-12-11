import svgPaths from "./svg-ub6sdwje11";
import { imgGroup } from "./svg-7gtr2";

function MenuIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menuIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menuIcon">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MenuBtutton() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[40px]" data-name="menuBtutton">
      <MenuIcon />
    </div>
  );
}

function AppName() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="appName">
      <MenuBtutton />
      <div className="basis-0 flex flex-col font-['Figtree:SemiBold',_sans-serif] font-semibold grow h-[36px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[21px] text-neutral-800 text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Story Editor</p>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Figtree:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-neutral-800 text-nowrap whitespace-pre">Close</p>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base />
    </div>
  );
}

function HeroiconsMiniChevronDown() {
  return (
    <div className="absolute left-[-2px] size-[18px] top-0" data-name="heroicons-mini/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="heroicons-mini/chevron-down">
          <path clipRule="evenodd" d={svgPaths.p31d45b00} fill="var(--fill-0, #636363)" fillRule="evenodd" id="Vector 4 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <HeroiconsMiniChevronDown />
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shrink-0 w-[34px]" data-name="<Button>">
      <Base1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0" data-name="<ButtonGroup>">
      <div className="content-stretch flex h-[32px] items-center overflow-clip relative rounded-[inherit]">
        <Button />
        <Button1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cfd8dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Typography>">
      <p className="font-['Arial:Regular',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px] whitespace-pre">Send to</p>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Figtree:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-neutral-800 text-nowrap whitespace-pre">Next: For acceptance</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base2 />
    </div>
  );
}

function HeroiconsMiniChevronDown1() {
  return (
    <div className="absolute left-[-2px] size-[18px] top-0" data-name="heroicons-mini/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="heroicons-mini/chevron-down">
          <path clipRule="evenodd" d={svgPaths.p31d45b00} fill="var(--fill-0, #636363)" fillRule="evenodd" id="Vector 4 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <HeroiconsMiniChevronDown1 />
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shrink-0 w-[34px]" data-name="<Button>">
      <Base3 />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0" data-name="<ButtonGroup>">
      <div className="content-stretch flex h-[32px] items-center overflow-clip relative rounded-[inherit]">
        <Button2 />
        <Button3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cfd8dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame1321318083() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Typography />
      <ButtonGroup1 />
    </div>
  );
}

function Base4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Figtree:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Publish</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-bl-[10px] rounded-tl-[10px] shrink-0" data-name="<Button>">
      <Base4 />
    </div>
  );
}

function Instance3() {
  return (
    <div className="bg-[#0350e6] content-stretch flex h-[32px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="Instance #3">
      <Button4 />
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[32px]" data-name="Vertical">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vertical"></g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help-circle">
          <path d={svgPaths.p19af2900} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative rounded-[30px] shrink-0" data-name="Buttons">
      <ButtonGroup />
      <Frame1321318083 />
      <Instance3 />
      <HelpCircle />
    </div>
  );
}

function Frame2608927() {
  return (
    <div className="content-stretch flex gap-[32px] h-[32px] items-center relative shrink-0 w-full">
      <AppName />
      <Buttons />
    </div>
  );
}

function AppBar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="AppBar">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <Frame2608927 />
    </div>
  );
}

function JasperIcons() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p2af8c400} id="Vector" stroke="var(--stroke-0, #9FA0A7)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container />
    </div>
  );
}

function Component11() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function JasperIcons1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p258f5380} id="Vector" stroke="var(--stroke-0, #9FA0A7)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container3 />
    </div>
  );
}

function Component13() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Component10() {
  return (
    <div className="box-border content-stretch flex items-center justify-center min-w-[93.017px] pl-[18.14px] pr-[18.16px] py-[6px] relative rounded-[4px] shrink-0" data-name="Component 10">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">Heading 1</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function JasperIcons2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p2978e180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container8 />
    </div>
  );
}

function Component14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component14 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function JasperIcons3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p21153000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container11 />
    </div>
  );
}

function Component15() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container12 />
    </div>
  );
}

function JasperIcons4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p185f3900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons4 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container14 />
    </div>
  );
}

function Component16() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component16 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function JasperIcons5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p1fe2f480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons5 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container17 />
    </div>
  );
}

function Component17() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function JasperIcons6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p1d1b8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons6 />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container20 />
    </div>
  );
}

function Component19() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component19 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.36%_8.32%_8.71%_8.67%]" data-name="Group">
      <div className="absolute inset-[-5.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path d={svgPaths.p3c3e3d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function JasperIcons7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <Group />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons7 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container23 />
    </div>
  );
}

function Component21() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component20 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component21 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function JasperIcons8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p2849fe00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[14px]" data-name="Container">
      <JasperIcons8 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container26 />
    </div>
  );
}

function Component23() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-name="Component 11">
      <Component22 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Component23 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function JasperIcons9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="JasperIcons">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[16px] min-w-[16px] relative shrink-0" data-name="Container">
      <JasperIcons9 />
    </div>
  );
}

function Component24() {
  return (
    <div className="box-border content-stretch flex gap-[5.01px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Component 10">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">Tools</p>
      </div>
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component24 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[rgba(0,0,0,0.06)] h-[20px] min-w-px shrink-0 w-px" data-name="Vertical Divider" />
      <Container2 />
      <Container5 />
      <Container7 />
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="box-border content-stretch flex items-start justify-center min-w-[42px] pl-0 pr-[16px] py-0 relative shrink-0 w-[557px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="basis-0 content-stretch flex gap-[3px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Toolbar">
      <Container35 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[11.688%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.869px_-1.87px] mask-size-[16px_16px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="Group">
            <path d={svgPaths.p2e110540} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function JasperIcons10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="JasperIcons">
      <ClipPathGroup />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-start min-h-[14px] min-w-[14px] relative shrink-0 w-[16px]" data-name="Container">
      <JasperIcons10 />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Component 2">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">Brand Guidelines</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center pl-[9px] pr-[15px] py-[7px] relative rounded-[6px] shrink-0" data-name="Component 9">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Component25 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0" data-name="Container">
      <Component9 />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Background() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3px] items-center p-[8px] relative w-full">
          <Toolbar />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-7.366%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path d={svgPaths.p1965f440} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function JasperIcons11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="JasperIcons">
      <Group2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[14px] min-w-[14px] relative shrink-0" data-name="Container">
      <JasperIcons11 />
    </div>
  );
}

function Component5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-px relative rounded-[4px] shrink-0 size-[24px]" data-name="Component 5">
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Component5 />
    </div>
  );
}

function JasperIcons12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p899700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p899700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[14px] min-w-[14px] relative shrink-0" data-name="Container">
      <JasperIcons12 />
    </div>
  );
}

function Component26() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-px relative rounded-[4px] shrink-0 size-[24px]" data-name="Component 5">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Component26 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Margin">
      <Container43 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[0.003px] h-[44px] items-center justify-end pb-px pl-0 pr-[12px] pt-0 relative w-full">
          <Background />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[30px] px-0 relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[38px] text-black w-full">
        <p className="leading-[52px] whitespace-pre-wrap">{`The Role of Artificial Intelligence in Modern Text Editors  `}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p3c263d00} fill="var(--fill-0, black)" fillOpacity="0.12" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[60px]" data-name="<Icon>">
      <Icon />
    </div>
  );
}

function AddImageIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Add image icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Add image icon">
          <path d={svgPaths.p219fc500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center min-h-[24px] relative shrink-0" data-name="Masked Icon">
      <AddImageIcon />
    </div>
  );
}

function Base5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon5 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#555555] text-[13px] text-nowrap whitespace-pre">Add main image</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <Base5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function GenerateImageIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Generate image icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_10699)" id="Generate image icon">
          <g id="Vector">
            <path d={svgPaths.p1e03ce70} stroke="var(--stroke-0, #FB53BB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d058940} stroke="var(--stroke-0, #FB53BB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p352d3780} stroke="var(--stroke-0, #FB53BB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_10699">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MaskedIcon6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center min-h-[24px] relative shrink-0" data-name="Masked Icon">
      <GenerateImageIcon />
    </div>
  );
}

function Base6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon6 />
      <p className="bg-clip-text bg-gradient-to-r font-['Inter:Regular',_sans-serif] font-normal from-[#f88eb3] leading-[22px] not-italic relative shrink-0 text-[13px] text-nowrap to-[#d07bfa] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        Generate image
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <Base6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f06292] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageButtons() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Image buttons">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-end relative shrink-0" data-name="Title">
      <Icon1 />
      <ImageButtons />
      <p className="font-['Arial:Regular',_sans-serif] leading-[1.75] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px] whitespace-pre">
        <span>{`or `}</span>
        <span className="text-[#00a7ee]">upload from your disk</span>.
      </p>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="bg-neutral-100 h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="Image section">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[300px] items-center justify-end px-[24px] py-[47px] relative w-full">
          <Title />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#90a4ae] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-[9px] px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="mb-0">{`Artificial intelligence (AI) is revolutionizing the way professionals create content, and this `}</p>
        <p className="mb-0">{`transformation is perhaps most evident in modern text editors. With AI-powered capabilities, `}</p>
        <p className="mb-0">{`these tools are becoming essential for boosting productivity, enhancing content quality, `}</p>
        <p className="mb-0">{`automating repetitive tasks, and creating personalized user experiences. Let’s explore how AI `}</p>
        <p className="whitespace-pre-wrap">{`is reshaping text editing and the key innovations driving this change.  `}</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-[21px] px-0 relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black w-full">
        <p className="leading-[40px] whitespace-pre-wrap">{`Boosting Productivity with AI  `}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-[9px] px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="mb-0">{`One of the greatest benefits of AI in text editors is its ability to dramatically increase `}</p>
        <p className="mb-0">{`efficiency. Tasks that once required significant time and effort can now be completed in `}</p>
        <p className="whitespace-pre-wrap">{`seconds. For example:  `}</p>
      </div>
    </div>
  );
}

function TextEditor() {
  return (
    <div className="min-w-[680px] relative shrink-0 w-full" data-name="Text editor">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start min-w-inherit pb-0 pt-[24px] px-[40px] relative w-full">
          <Heading1 />
          <ImageSection />
          <Container44 />
          <Heading2 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[48px] leading-[0] not-italic relative shrink-0 text-black w-full" data-name="Item">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[24px] justify-center left-0 text-[16px] top-[12px] translate-y-[-50%] w-[7.35px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]"> </span>
          </li>
        </ul>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[48px] justify-center leading-[24px] left-0 text-[0px] text-[16px] top-[24px] translate-y-[-50%] w-[651.15px]">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Real-Time Error Correction</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">{`: AI instantly detects spelling mistakes, grammatical errors, `}</span>
        </p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal whitespace-pre-wrap">{`and punctuation slips, allowing writers to focus on ideas rather than mechanics.  `}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[48px] leading-[0] not-italic relative shrink-0 text-black w-full" data-name="Item">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[24px] justify-center left-0 text-[16px] top-[12px] translate-y-[-50%] w-[7.35px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]"> </span>
          </li>
        </ul>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[48px] justify-center leading-[24px] left-0 text-[0px] text-[16px] top-[24px] translate-y-[-50%] w-[661.7px]">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Autocomplete and Predictive Text</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">{`: By analyzing context, AI suggests words or phrases `}</span>
        </p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal whitespace-pre-wrap">{`to speed up writing and reduce effort.  `}</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[48px] leading-[0] not-italic relative shrink-0 text-black w-full" data-name="Item">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[24px] justify-center left-0 text-[16px] top-[12px] translate-y-[-50%] w-[7.35px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]"> </span>
          </li>
        </ul>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[48px] justify-center leading-[24px] left-0 text-[0px] text-[16px] top-[24px] translate-y-[-50%] w-[679.694px]">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Smart Templates</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">{`: Advanced text editors provide pre-designed layouts for emails, reports, `}</span>
        </p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal whitespace-pre-wrap">{`and articles tailored to user needs—ensuring speed, structure, and consistency.  `}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[5px] items-start pb-[7px] pl-[24px] pr-0 pt-[14px] relative w-full">
          <Item />
          <Item1 />
          <Item2 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[26px] pt-[9px] px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">{`These features not only save time but also maintain high-quality standards, making them `}</p>
      </div>
    </div>
  );
}

function SlotTextbox() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[1872px] pt-0 px-0 relative shrink-0 w-full" data-name="Slot → Textbox">
      <TextEditor />
      <List />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <SlotTextbox />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white bottom-[-1914px] content-stretch flex flex-col items-start justify-center left-0 right-0 top-0" data-name="Background">
      <Container47 />
    </div>
  );
}

function Background2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Background">
      <Background1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Background2 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Main">
      <Container48 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-px px-px relative size-full">
          <Header />
          <Main />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
    </div>
  );
}

function Editor() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[10px] grow h-full items-start max-w-[920px] min-h-px min-w-[680px] pb-0 pt-[24px] px-0 relative shrink-0" data-name="Editor">
      <BackgroundBorder />
    </div>
  );
}

function Frame1321318090() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
      <Editor />
    </div>
  );
}

function Frame1321318086() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame1321318090 />
    </div>
  );
}

function Edit02() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="edit-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="edit-02">
          <path d={svgPaths.p13b45f00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Browser() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="browser">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="browser">
          <path d={svgPaths.p33602e00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[24px]" data-name="Container">
      <Browser />
    </div>
  );
}

function Margin2() {
  return (
    <div className="basis-0 grow min-h-px min-w-[48px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col items-end min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-end min-w-inherit pl-[342px] pr-0 py-0 relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-between pl-[16px] pr-[12px] py-0 relative shrink-0 w-[318px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <Edit02 />
      <Margin2 />
    </div>
  );
}

function FaviconAssistant1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="favicon_assistant 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_10689)" id="favicon_assistant 1">
          <path d={svgPaths.p1e549600} fill="var(--fill-0, #1E1E2F)" id="Vector" />
          <path d={svgPaths.p31e5a100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p31973c00} fill="var(--fill-0, #1E1E2F)" id="A" />
          <path d={svgPaths.p2eefbe80} fill="var(--fill-0, #FFC107)" id="Vector_3" />
          <path d={svgPaths.p24cbe000} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_10689">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function JasperIcons13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="JasperIcons">
      <FaviconAssistant1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ring Chat</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <JasperIcons13 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-[9px] px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">What can I do for you?</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[720px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[14px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[12px] py-0 relative w-full">
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Image01() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image-01">
          <path d={svgPaths.p43572f0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[16px] whitespace-pre">Add best fitted photos</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center min-h-[24px] pl-[9px] pr-[11px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Component 12">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Image01 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0" data-name="Container">
      <Component12 />
    </div>
  );
}

function Film01() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="film-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_10711)" id="film-01">
          <path d={svgPaths.p257d3580} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_10711">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[16px] whitespace-pre">Add fitted videos</p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center min-h-[24px] pl-[9px] pr-[11px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Component 12">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Film01 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0" data-name="Container">
      <Component27 />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image-01">
          <path d={svgPaths.p43572f0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[16px] whitespace-pre">{`Find interesting social media posts `}</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center min-h-[24px] pl-[9px] pr-[11px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Component 12">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Image2 />
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[232px]" data-name="Container">
      <Component28 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container62 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="max-w-[720px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit px-[12px] py-0 relative w-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container66 />
    </div>
  );
}

function Frame1321318085() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container58 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-auto relative shrink-0 w-full" data-name="Container">
      <Frame1321318085 />
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container68 />
    </div>
  );
}

function JasperIcons14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p11722d00} fill="var(--fill-0, #0056D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[14px] min-w-[14px] relative shrink-0" data-name="Container">
      <JasperIcons14 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#003dbb] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">AI w edytorach tekstu</p>
      </div>
    </div>
  );
}

function JasperIcons15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="JasperIcons">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #003DBB)" strokeLinecap="square" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonRemoveAttachment() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[14px] min-w-[14px] relative shrink-0" data-name="Button - Remove attachment">
      <JasperIcons15 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#edf5fe] box-border content-stretch flex gap-[6px] items-center justify-center max-w-[181.63px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <Container70 />
      <Container71 />
      <ButtonRemoveAttachment />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Background3 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[436px] relative self-stretch shrink-0" data-name="Container">
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="max-h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-inherit overflow-auto size-full">
        <div className="box-border content-stretch flex flex-wrap gap-0 items-start max-h-inherit pb-[2px] pt-[8px] px-[8px] relative w-full">
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c6c74] text-[14px] w-full">
        <p className="leading-[20px]">Reply to Ring Chat</p>
      </div>
    </div>
  );
}

function SlotTextarea() {
  return (
    <div className="h-[52px] min-h-[52px] relative shrink-0 w-full" data-name="Slot → Textarea">
      <div className="flex flex-row justify-center min-h-inherit overflow-x-auto overflow-y-clip size-full">
        <div className="box-border content-stretch flex h-[52px] items-start justify-center min-h-inherit px-[8px] py-[6px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-h-[288px] overflow-auto pb-[6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <SlotTextarea />
    </div>
  );
}

function Typography1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre">Wybierz źródło danych</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p87ddc80} fill="var(--fill-0, #0F172A)" fillRule="evenodd" id="Vector 4 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon2 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon3 />
    </div>
  );
}

function ChipUnderConstruction() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip Under Construction>">
      <Typography1 />
      <IconButton />
    </div>
  );
}

function JasperIcons16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="JasperIcons">
          <path d={svgPaths.pe196c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[16px] min-w-[16px] relative shrink-0" data-name="Container">
      <JasperIcons16 />
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Component29 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[28px]" data-name="Container">
      <Container79 />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select">
      <ChipUnderConstruction />
      <Container80 />
    </div>
  );
}

function JasperIcons17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="JasperIcons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="JasperIcons">
          <path d={svgPaths.p1b5a6440} id="Vector" stroke="var(--stroke-0, #9FA0A7)" strokeLinecap="square" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[16px] min-w-[16px] relative shrink-0" data-name="Container">
      <JasperIcons17 />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container81 />
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative self-stretch shrink-0" data-name="Actions">
      <Component30 />
    </div>
  );
}

function EditorBottomBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="editorBottomBar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[8px] relative w-full">
          <Select />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative w-full">
          <Container74 />
          <Container76 />
          <EditorBottomBar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function RingChatEditor() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full" data-name="RingChat / Editor">
      <BackgroundBorderShadow />
    </div>
  );
}

function Container82() {
  return (
    <div className="max-w-[720px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[8px] pt-0 px-[8px] relative w-full">
          <RingChatEditor />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container69 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function AssistantContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[10px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[320px]" data-name="Assistant container">
      <Container84 />
    </div>
  );
}

function RingChatColumn() {
  return (
    <div className="bg-neutral-50 h-full relative rounded-[3px] shrink-0 w-[320px]" data-name="RingChat / Column">
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative rounded-[inherit] w-[320px]">
        <AssistantContainer />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame1321318073() {
  return (
    <div className="bg-neutral-50 content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <RingChatColumn />
    </div>
  );
}

function Frame1321318087() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <Frame1321318073 />
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 bg-neutral-50 content-stretch flex gap-[24px] grow items-end justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
      <Frame1321318086 />
      <Frame1321318087 />
    </div>
  );
}

function Main1() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col h-[796px] items-center justify-center relative shrink-0 w-full" data-name="Main">
      <Body />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <Main1 />
    </div>
  );
}

export default function Component1440() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col items-center relative size-full" data-name="1440->">
      <AppBar />
      <Background4 />
    </div>
  );
}