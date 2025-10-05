export const dynamic = 'force-static';

export default function TrustSafety() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-bold">Trust & Safety</h1>
      <p className="mt-4 text-white/80">We bake safety, fairness, and transparency into HaloHub’s DNA.</p>
      <ul className="mt-6 space-y-3 text-white/90">
        <li>• Open & explainable HALO Engine (reason codes on allocations)</li>
        <li>• Privacy-preserving, public impact ledger (no identities)</li>
        <li>• Progressive verification and anti-gaming safeguards</li>
        <li>• Community Safety Council and public incident log</li>
        <li>• Profit caps and reinvestment mandate</li>
      </ul>
      <p className="mt-6 text-white/60 text-sm">Full policies will be published and versioned as we open the pilot.</p>
    </div>
  );
}
