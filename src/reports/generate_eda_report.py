from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import (
    getSampleStyleSheet
)

doc = SimpleDocTemplate(
    "reports/eda_report.pdf"
)

styles = getSampleStyleSheet()

story = []

story.append(
    Paragraph(
        "Customer Churn EDA Report",
        styles["Title"]
    )
)

story.append(Spacer(1,10))

sections = [

    "Churn Distribution Analysis",

    "Monthly Charges vs Churn",

    "Contract Type vs Churn",

    "Geography vs Churn",

    "Customer Tenure vs Churn",

    "Correlation Heatmap"

]

for section in sections:

    story.append(

        Paragraph(
            section,
            styles["Heading2"]
        )

    )

    story.append(

        Paragraph(
            "Analysis completed successfully.",
            styles["BodyText"]
        )

    )

    story.append(
        Spacer(1,10)
    )

doc.build(story)

print("EDA Report Generated")