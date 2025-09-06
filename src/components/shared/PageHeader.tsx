import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="spacing-section gradient-subtle">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center space-y-[var(--space-fluid-md)]">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center justify-center space-x-[var(--space-sm)] text-sm text-muted-foreground flex-wrap">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-[var(--space-sm)]">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="font-bold text-foreground leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <div className="text-block mx-auto">
              <p className="text-responsive-xl text-muted-foreground">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;