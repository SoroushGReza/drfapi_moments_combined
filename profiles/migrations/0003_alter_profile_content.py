# Generated by Django 3.2.21 on 2023-10-04 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='content',
            field=models.TextField(blank=True),
        ),
    ]
