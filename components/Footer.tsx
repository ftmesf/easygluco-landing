export function Footer() {
  return (
    <footer className="border-t border-brand-border/60 bg-brand-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-bold text-brand-fg">سیناکر · ایزی‌گلوکو</p>
          <p className="mt-1 text-xs leading-6 text-muted-foreground">
            تحت لیسانس Osung Healthcare کره جنوبی · ۲۰ سال حضور در بازار ایران
          </p>
        </div>
        <div className="text-xs leading-6 text-muted-foreground sm:text-end">
          <p>۰۲۱-۹۱۰۰۲۰۰۲</p>
          <p>support@sinacare.ir</p>
          <p className="mt-2">© شرکت راهکار هوشمند سینا</p>
        </div>
      </div>
    </footer>
  );
}
