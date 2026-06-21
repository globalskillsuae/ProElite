const steps = [
  { num: '01', title: 'Site Inspection', desc: 'Our engineers visit and evaluate the site conditions and requirements', active: true },
  { num: '02', title: 'Technical Assessment', desc: 'Detailed analysis of scope, resources, and technical requirements' },
  { num: '03', title: 'Quotation Approval', desc: 'Transparent pricing with full scope breakdown for client approval' },
  { num: '04', title: 'Execution', desc: 'Certified technicians carry out work to the highest standards' },
  { num: '05', title: 'Quality Check', desc: 'Rigorous inspection and testing before project handover' },
  { num: '06', title: 'Completion', desc: 'Final sign-off, documentation, and after-service support' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="section-title">Our <span>Work Process</span></h2>
          <div className="divider center"></div>
          <p className="section-subtitle">A structured, professional approach that ensures quality delivery on every engagement.</p>
        </div>
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div className={`process-step${step.active ? ' active' : ''} reveal reveal-delay-${i + 1}`} key={step.num}>
              <div className="process-num">{step.num}</div>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}