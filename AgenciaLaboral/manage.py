#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
<<<<<<< HEAD
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AgenciaLaboral.settings')
=======
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AgenciaLaboral.settings.local')
    #AgenciaLaboral.settings.local
>>>>>>> 23f4efda341b50d4aa3f86d5a3e2cd27e6c41172
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
