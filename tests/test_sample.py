from sdts import main


def test_main_runs(capsys):
    main()
    captured = capsys.readouterr()
    assert "SDTS package is installed and running." in captured.out
