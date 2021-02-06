# Description:
Homework project to learn and test different input forms.
# Notes:
- Task aimed more towards looking into various input types and their behavior rather than styling.
- Some simple input boxes styling was performed (e.g. `number` inputs), just for sake of time.
# Conlcusions:
- Styling non-text input types (like `number`, `range`, `checkboxes`, etc.) may is tricky and may require JS.
- Input form element styling is highly dependant on web browser used.
# Todo:
- [ ] Test input validation and data types that are being sent
- [ ] Create different types of inputs and post with `action="http://dev.cotenfrontend.pl"`
- [ ] Add custom outline at `:focus`
- [x] Some additional refactoring to simplify class definitions (e.g. merge `radio` and `checkbox` styles and add modificators)
- [x] Some simple data validation added
- [x] Need some general cleanup of HTML formatting and CSS classes
- [x] Fix styling HTML for `checkbox` and `radio`. Is the `<span>` element needed inside `<label>`?
- [x] Add disabled mode to the dropdown list, when it's respectve number is 0
