import svgPaths from "./svg-5rsyqvl061";

function IconLeft() {
  return (
    <div className="absolute left-[calc(50%-1px)] size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Left">
          <path d={svgPaths.p3a559be0} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="h-[24px] min-h-[24px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <IconLeft />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Arial:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre">Paragraph</p>
      <MaskedIcon />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25d66f0} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
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

function IconButton() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p16145c80} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
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

function IconButton1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26baa000} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
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

function IconButton2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon5 />
    </div>
  );
}

function MinWidth() {
  return <div className="h-0 shrink-0 w-px" data-name="min-width" />;
}

function DividerVertical() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start px-0 py-[4px] relative shrink-0" data-name="<Divider> | Vertical">
      <MinWidth />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "22", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[90deg]">
          <div className="h-full relative w-[22px]" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 1">
                <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="22" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2ec05880} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
      <Icon6 />
    </div>
  );
}

function Base1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Base">
      <Icon7 />
      <p className="font-['Arial:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre">Comment</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.167%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <path d={svgPaths.p6688780} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
          <path d={svgPaths.p78f580} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_2" />
          <path d={svgPaths.pb8fc000} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.167%]" data-name="Group">
      <Group />
    </div>
  );
}

function Icon8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
      <Icon8 />
    </div>
  );
}

function Base2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Base">
      <Icon9 />
      <p className="font-['Arial:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre">Improve writing</p>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<Button>">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[4px] relative w-full">
          <Base />
          <IconButton />
          <IconButton1 />
          <IconButton2 />
          <div className="flex flex-row items-center self-stretch">
            <DividerVertical />
          </div>
          <Base1 />
          <div className="flex flex-row items-center self-stretch">
            <DividerVertical />
          </div>
          <Base2 />
        </div>
      </div>
    </div>
  );
}

function ContextMenu() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-0 relative rounded-[4px] shrink-0" data-name="Context menu">
      <Button />
    </div>
  );
}

export default function Paper() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.14),0px_0px_4px_-1px_rgba(0,0,0,0.2)] size-full" data-name="<Paper>">
      <ContextMenu />
    </div>
  );
}