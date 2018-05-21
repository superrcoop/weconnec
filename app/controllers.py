def form_errors(form):
    error_messages = []
    """Collects form errors"""
    for field, errors in form.errors.items():
        for error in errors:
            message = u"Error in the %s field - %s" % (
                    getattr(form, field).label.text,
                    error
                )
            error_messages.append(message)

    return error_messages

def split_tags(string):
    """
        split data from database ---> converted to array
    """
    return tags_as_array

def strip_tags(string):
    """
        string input from user converted to csv for db store
    """
    return tags_as_array

