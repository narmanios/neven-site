# Portfolio Projects

This directory contains individual case study pages for each portfolio project.

## Structure

Each project has its own HTML file based on the `project-template.html` template. The template provides a consistent structure for presenting project case studies.

## Project Pages

Create or update these files for each portfolio item:

1. **segment-opportunity-simulator.html** - Segment Opportunity Simulator (Product Design)
2. **silhouette-art.html** - Silhouette Art (Data Visualization + AI)
3. **louis-armstrong.html** - Louis Armstrong (Data Visualization)
4. **persona-pathways.html** - Persona Pathways (Product Design)
5. **history-vault.html** - HISTORY Vault (Product Design)
6. **machine-learning.html** - Machine Learning (AI/ML)
7. **women-climate.html** - Women and Climate Change (Data Visualization)
8. **agentic.html** - Agentic (Product Design)
9. **lifetime-movie-club.html** - Lifetime Movie Club (Product Design)

## Template Structure

Each project page includes:

### Header Section

- Site navigation (consistent across all pages)
- Project title
- Metadata (Role, Type, Year)

### Content Sections

- **Overview**: Brief description and context
- **The Challenge**: Problems and constraints
- **Approach & Solution**: Design process and methodology
- **Results & Impact**: Outcomes and metrics
- **Key Takeaways**: Lessons learned (optional)

### Visual Elements

- Hero image at the top
- Supporting images throughout sections
- Image captions for context

### Footer

- Consistent footer with social links
- Project navigation (Previous/Next)

## How to Add Content

1. **Duplicate the Template**:

   ```bash
   cp project-template.html your-project-name.html
   ```

2. **Update the Metadata**:
   - Change the `<title>` tag
   - Update meta description
   - Modify project title (`<h1>`)
   - Fill in Role, Type, and Year

3. **Add Your Content**:
   - Replace placeholder text with your project story
   - Update section headings as needed
   - Add or remove sections based on your needs

4. **Add Images**:
   - Place images in `../images/` directory
   - Update image `src` attributes
   - Add descriptive alt text
   - Include captions where helpful

5. **Update Navigation**:
   - Set the "Next Project" link to the appropriate project
   - Ensure "Back to Work" links to `../index.html`

## Image Guidelines

- **Hero Images**: 1200x800px minimum, placed at the top
- **Content Images**: Variable sizes, but maintain consistency
- **Format**: JPG for photos, PNG for UI screenshots, SVG for icons
- **Alt Text**: Always include descriptive alt text for accessibility
- **Captions**: Use `<p class="project-image-caption">` for context

## Tips for Great Case Studies

1. **Tell a Story**: Walk readers through your process
2. **Show Your Thinking**: Explain design decisions and rationale
3. **Use Visuals**: Images should support and enhance your narrative
4. **Be Specific**: Include concrete examples and outcomes
5. **Keep it Concise**: Respect your readers' time
6. **Highlight Impact**: Share results and learnings

## Accessing Password-Protected Content

If you have password-protected pages on your live site that you want to rebuild:

1. Navigate to each project page manually
2. Enter the password to access the content
3. Copy the text, download images, and note the layout
4. Use this information to fill in the project template

Alternatively, you can provide content in another format (Google Docs, Notion, etc.) and I can help integrate it into the templates.
