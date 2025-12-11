import svgPaths from "./svg-23ycbo5dsu";

function ListSubheader() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="<ListSubheader>">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[32px] items-start justify-end px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Arial:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[0.1px] w-full">
            <p className="leading-[24px]">Basic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb851170} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon />
    </div>
  );
}

function LeftSlot() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Image</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot />
      <Container />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="<MenuItem>">
      <Container1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Group">
          <path d={svgPaths.p2f44b500} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
          <path d={svgPaths.p2d9421f0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]" data-name="Group">
      <Group />
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <Group1 />
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

function LeftSlot1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Video</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot1 />
      <Container2 />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="<MenuItem>">
      <Container3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa60780} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon4 />
    </div>
  );
}

function LeftSlot2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Gallery</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot2 />
      <Container4 />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="<MenuItem>">
      <Container5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.17%_12.5%_12.5%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Group">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
          <g id="Group_2">
            <path d={svgPaths.p1da62a00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_4" />
            <path d={svgPaths.p89a3480} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_5" />
            <path d={svgPaths.p3a801780} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon6 />
    </div>
  );
}

function LeftSlot3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Embed</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot3 />
      <Container6 />
    </div>
  );
}

function MinHeight() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%]">
          <MinHeight />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="<MenuItem>">
      <Container7 />
      <DividerHorizontal />
    </div>
  );
}

function ListSubheader1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="<ListSubheader>">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[32px] items-start justify-end px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Arial:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[0.1px] w-full">
            <p className="leading-[24px]">Addones</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2cffb5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon8 />
    </div>
  );
}

function LeftSlot4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Table</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot4 />
      <Container8 />
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="<MenuItem>">
      <Container9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p6cfb00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <Icon10 />
    </div>
  );
}

function LeftSlot5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[36px] relative shrink-0" data-name="Left Slot">
      <Icon11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre">Chart</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="Container">
      <LeftSlot5 />
      <Container10 />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="<MenuItem>">
      <Container11 />
    </div>
  );
}

function MenuList() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[4px] shrink-0 w-full" data-name="<MenuList>">
      <ListSubheader />
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <ListSubheader1 />
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<Paper>">
      <MenuList />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="<Menu>">
      <Paper />
    </div>
  );
}