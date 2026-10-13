import { GateForm } from "@/components/gate/GateForm";
import { TasamiLogo } from "@/components/brand/TasamiLogo";

export default function ComingSoonPage() {
  return (
    <main className="hero-stage" style={{ minHeight: "100svh" }}>
      <div className="container-page hero-stage-inner" style={{ maxWidth: "32rem" }}>
        <TasamiLogo variant="hero" alt="مجموعة تسامي" priority />
        <span className="hero-group">مجموعة</span>
        <h1 className="hero-subhead">الموقع قيد التحديث</h1>
        <p className="hero-support mx-auto">
          نجهّز مجموعة تسامي كمظلة للشركات الثلاث، وعرض تحويل الشركات للعمل بالذكاء الاصطناعي. أدخل كلمة المرور المؤقتة
          للمعاينة.
        </p>
        <p className="hero-support mx-auto" dir="ltr" lang="en" style={{ marginTop: "0.75rem" }}>
          The site is being updated. Enter the temporary password to preview.
        </p>
        <GateForm />
      </div>
    </main>
  );
}
